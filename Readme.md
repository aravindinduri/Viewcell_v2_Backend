
# viewcell Backend

The Viewcell Backend powers the Viewcell platform, handling essential server-side operations like video management, user interactions, and tweets. It utilizes Cloudinary for file hosting, integrates JWT authentication for secure user access, and uses bcrypt for password hashing. The backend connects to a MongoDB database and leverages aggregation pipelines for efficient data processing.

### 🚀 Key Features  

- **🎥 Video Management** – Upload, manage, and stream videos with Cloudinary integration  
- **🔐 JWT Authentication** – Secure user authentication using JWT tokens  
- **🔒 Password Hashing** – Securely store user passwords using bcrypt  
- **🗂️ MongoDB Aggregation Pipelines** – Efficient querying and data aggregation using MongoDB  
- **🌐 API Routes** – Organized endpoints for handling user, video, and tweet-related requests  
- **☁️ File Hosting on Cloudinary** – Seamlessly upload, store, and deliver media files with Cloudinary, ensuring fast, optimized access and streaming  


### Folder Structure
```
Viewcell_v2_Backend/
├── 📂 public/                    # Static assets (e.g., images, fonts, etc.)
├── 📂 src/                       # Source code
│   ├── 📂 controllers/           # Business logic
│   ├── 📂 db/                    # Database connections and configurations
│   ├── 📂 middlewares/           # Middleware functions (e.g., authentication)
│   ├── 📂 models/                # Database models
│   ├── 📂 routes/                # API route handlers
│   ├── 📂 utils/                 # Utility functions and helpers
│   ├── 📄 app.js                 # Main Express app configuration
│   ├── 📄 constants.js           # Constants and configurations
│   └── 📄 index.js               # Entry point for the application
├── 📄 .gitignore                 # Git ignore file
├── 📄 .prettierignore            # Prettier ignore file
├── 📄 .prettierrc                # Prettier configuration
├── 📄 package-lock.json          # Dependency lock file
├── 📄 package.json               # Project metadata and dependencies
└── 📄 README.md                  # Project description and setup guide


```
### .env Example
```
MONGODB_URI=<Your MongoDB URI>
PORT=<Your desired port number>
CORS_ORIGIN=<Allowed origins, e.g., http://localhost:3000>
ACCESS_TOKEN_SECRET=<Your JWT access token secret>
ACCESS_TOKEN_EXPIRY=<JWT access token expiry, e.g., 1d>
REFRESH_TOKEN_SECRET=<Your JWT refresh token secret>
REFRESH_TOKEN_EXPIRY=<JWT refresh token expiry, e.g., 10d>
CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
CLOUDINARY_API_KEY=<Your Cloudinary API key>
CLOUDINARY_API_SECRET=<Your Cloudinary API secret>
CLOUDINARY_URL=<Your Cloudinary URL>
```