# Deal Navigator

Deal Navigator is a full-stack startup benefits platform that helps early-stage founders and teams discover and claim exclusive SaaS deals. The platform supports both public and restricted deals and enforces access control through user verification and authentication.

---

## Tech Stack

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animations and transitions

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- REST APIs
- JWT-based authentication

---

## Application Flow

1. User registers and logs in  
2. User browses available deals  
3. Locked deals clearly indicate restricted access  
4. Verified users can claim eligible deals  
5. Claimed deals appear in the user dashboard with status tracking  

---

## Authentication & Authorization

Authentication is implemented using JWT. Protected routes validate tokens via middleware. Users who are not verified are prevented from claiming locked deals at the API level.

---

## Core Models

- **User** – authentication details and verification status  
- **Deal** – deal metadata, category, and access level  
- **Claim** – relationship between user and deal with claim status  

---

## Deal Claim Flow

When a user claims a deal, the backend validates eligibility and access rights before creating a claim with a `pending` status. The claim is immediately reflected in the user dashboard.

---

## UI & Animation

The frontend includes animated page transitions, micro-interactions, loading states, and a motion-enhanced landing page to improve usability and visual clarity.

---

## Known Limitations

- No admin dashboard for deal management  
- Simplified claim approval flow  
- No notification or email system  

---

## Production Improvements

- Admin moderation workflows  
- Email verification and notifications  
- Rate limiting and monitoring  
- Caching for improved performance  

---

