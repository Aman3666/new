"""
Backend API Tests for Reckon Computers Marketing Site
Tests: Health, Company Info, Contact Form CRUD, Validation
"""
import pytest
import requests
import os
import time

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthEndpoint:
    """Health check endpoint tests"""
    
    def test_health_returns_200(self):
        """GET /api/ should return 200 with status ok"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert data.get("status") == "ok"
        assert "message" in data
        print(f"✓ Health check passed: {data}")


class TestCompanyEndpoint:
    """Company info endpoint tests"""
    
    def test_company_returns_200(self):
        """GET /api/company should return company info"""
        response = requests.get(f"{BASE_URL}/api/company")
        assert response.status_code == 200
        data = response.json()
        
        # Validate required fields
        assert data.get("name") == "Reckon Computers"
        assert "tagline" in data
        assert "Marathwada" in data.get("tagline", "")
        assert "phones" in data
        assert isinstance(data["phones"], list)
        assert len(data["phones"]) >= 1
        assert "whatsapp" in data
        print(f"✓ Company info returned: {data['name']}, phones: {data['phones']}")


class TestContactEndpoint:
    """Contact form endpoint tests - CRUD operations"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup test data"""
        self.valid_payload = {
            "name": "TEST_John Doe",
            "email": "test_john@example.com",
            "phone": "+919876543210",
            "subject": "Test Enquiry",
            "message": "This is a test message for the contact form."
        }
    
    def test_create_enquiry_success(self):
        """POST /api/contact with valid payload returns 201"""
        payload = {
            "name": "TEST_Create User",
            "email": "test_create@example.com",
            "phone": "+919876543210",
            "subject": "Test Subject",
            "message": "This is a valid test message for enquiry."
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 201, f"Expected 201, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert data.get("name") == payload["name"]
        assert data.get("email") == payload["email"]
        assert data.get("phone") == payload["phone"]
        assert data.get("message") == payload["message"]
        assert "id" in data
        assert "_id" not in data  # MongoDB _id should be excluded
        print(f"✓ Enquiry created with id: {data['id']}")
    
    def test_create_enquiry_persists_to_db(self):
        """POST /api/contact should persist to MongoDB and be retrievable via GET"""
        unique_name = f"TEST_Persist_{int(time.time())}"
        payload = {
            "name": unique_name,
            "email": "test_persist@example.com",
            "phone": "+919876543210",
            "subject": "Persistence Test",
            "message": "Testing if this enquiry persists to database."
        }
        
        # Create enquiry
        create_response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert create_response.status_code == 201
        created_id = create_response.json().get("id")
        
        # Verify via GET - should appear in list
        get_response = requests.get(f"{BASE_URL}/api/contact")
        assert get_response.status_code == 200
        enquiries = get_response.json()
        
        # Find our created enquiry
        found = any(e.get("id") == created_id for e in enquiries)
        assert found, f"Created enquiry {created_id} not found in GET response"
        print(f"✓ Enquiry {created_id} persisted and retrieved successfully")
    
    def test_list_enquiries_returns_200(self):
        """GET /api/contact should return list of enquiries"""
        response = requests.get(f"{BASE_URL}/api/contact")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        
        # Check no _id in response
        for enquiry in data:
            assert "_id" not in enquiry, "MongoDB _id should not be in response"
        print(f"✓ Listed {len(data)} enquiries")
    
    def test_list_enquiries_sorted_by_recent(self):
        """GET /api/contact should return most recent first"""
        # Create two enquiries with slight delay
        payload1 = {
            "name": "TEST_First",
            "email": "first@example.com",
            "phone": "+919876543210",
            "subject": "First",
            "message": "First enquiry message here."
        }
        payload2 = {
            "name": "TEST_Second",
            "email": "second@example.com",
            "phone": "+919876543211",
            "subject": "Second",
            "message": "Second enquiry message here."
        }
        
        requests.post(f"{BASE_URL}/api/contact", json=payload1)
        time.sleep(0.5)
        requests.post(f"{BASE_URL}/api/contact", json=payload2)
        
        # Get list
        response = requests.get(f"{BASE_URL}/api/contact")
        assert response.status_code == 200
        enquiries = response.json()
        
        # Find our test enquiries
        test_enquiries = [e for e in enquiries if e.get("name", "").startswith("TEST_")]
        if len(test_enquiries) >= 2:
            # Most recent should be first
            names = [e.get("name") for e in test_enquiries[:2]]
            assert "TEST_Second" in names[0] or "TEST_First" in names[1], "Enquiries should be sorted by most recent"
        print(f"✓ Enquiries sorted by most recent first")


class TestContactValidation:
    """Contact form validation tests"""
    
    def test_invalid_email_returns_422(self):
        """POST /api/contact with invalid email should return 422"""
        payload = {
            "name": "TEST_Invalid Email",
            "email": "not-an-email",
            "phone": "+919876543210",
            "subject": "Test",
            "message": "This is a test message."
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for invalid email, got {response.status_code}"
        print(f"✓ Invalid email rejected with 422")
    
    def test_missing_name_returns_422(self):
        """POST /api/contact without name should return 422"""
        payload = {
            "email": "test@example.com",
            "phone": "+919876543210",
            "message": "This is a test message."
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing name, got {response.status_code}"
        print(f"✓ Missing name rejected with 422")
    
    def test_missing_email_returns_422(self):
        """POST /api/contact without email should return 422"""
        payload = {
            "name": "TEST_No Email",
            "phone": "+919876543210",
            "message": "This is a test message."
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing email, got {response.status_code}"
        print(f"✓ Missing email rejected with 422")
    
    def test_missing_phone_returns_422(self):
        """POST /api/contact without phone should return 422"""
        payload = {
            "name": "TEST_No Phone",
            "email": "test@example.com",
            "message": "This is a test message."
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing phone, got {response.status_code}"
        print(f"✓ Missing phone rejected with 422")
    
    def test_missing_message_returns_422(self):
        """POST /api/contact without message should return 422"""
        payload = {
            "name": "TEST_No Message",
            "email": "test@example.com",
            "phone": "+919876543210"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing message, got {response.status_code}"
        print(f"✓ Missing message rejected with 422")
    
    def test_short_message_returns_422(self):
        """POST /api/contact with message < 5 chars should return 422"""
        payload = {
            "name": "TEST_Short Msg",
            "email": "test@example.com",
            "phone": "+919876543210",
            "message": "Hi"  # Too short (min 5 chars)
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for short message, got {response.status_code}"
        print(f"✓ Short message rejected with 422")
    
    def test_short_name_returns_422(self):
        """POST /api/contact with name < 2 chars should return 422"""
        payload = {
            "name": "A",  # Too short (min 2 chars)
            "email": "test@example.com",
            "phone": "+919876543210",
            "message": "This is a valid message."
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for short name, got {response.status_code}"
        print(f"✓ Short name rejected with 422")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
