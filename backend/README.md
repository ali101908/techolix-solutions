# Techolix Solutions Backend

## Setup Instructions

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   - Copy `.env.example` to `.env`
   - Add your SendGrid API key to `.env`

4. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

## SendGrid Setup

1. Create a SendGrid account at https://sendgrid.com
2. Verify your domain email (info@techolixsolutions.com)
3. Create an API key with "Mail Send" permissions
4. Add the API key to your `.env` file

## API Endpoints

### POST /contact
Sends contact form emails via SendGrid.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I need web development services",
  "service_type": "Web Development"
}
```

**Response:**
```json
{
  "success": "Message sent and auto-reply delivered!"
}
```

## Features

- ✅ Admin notification email
- ✅ Auto-reply to customer
- ✅ CORS enabled for frontend integration
- ✅ Input validation
- ✅ Error handling
- ✅ Professional email templates
