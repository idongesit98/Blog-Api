# Blog-Api
This project is a Sample solution for the [Blog-Platform-Api](https://roadmap.sh/projects/blogging-platform-api) challenge from [roadmap.sh](https://roadmap.sh/),it allows users of the Api to be able create,read,delete and update posts on the blog.

## Features
- **Create Blog Posts**: Add new blog posts with title, content, category, and tags.
- **Update Blog Posts**: Modify existing blog posts with new information.
- **Delete Blog Posts**: Remove blog posts from the platform.
- **View Blog Posts**: Retrieve single or multiple blog posts.
- **Search Blog Posts**: Filter posts by a search term in the title, content, or category.


## 🚀 Getting Started

To clone the project you need the following below:

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MySQL
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hamza-140/blogging-platform-api.git
   cd blogging-platform-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory with the following content:
   ```bash
   PORT=4040
   ```
    ```bash
   MYSQL_HOST = "your localhost or any host"
   MYSQL_PASSWORD = "sql-password"
   MYSQL_ROOT = "root"
   MYSQL_DATABASE = "database name"
   ```
4. Start the development server:
   ```bash
   node start
   ```

# API Endpoints
## Blog
- POST /api/blog/posts
- PUT /api/blog/post-update/:id
- DELETE /api/blog/:id
- GET /api/blog/all-posts
- GET /api/blog/search


