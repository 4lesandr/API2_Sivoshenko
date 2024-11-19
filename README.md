# GitHub API Integration

This backend application is designed to interact with the GitHub API to retrieve user data including followers, repositories, and profile information. It is built with Node.js and Express, making it straightforward to extend and integrate with other services.

## Application Logic

The application serves as an intermediary between the client (e.g., a frontend app or Postman) and the GitHub API, performing the following tasks:

- **Followers Retrieval**: Fetches a list of followers for a specified GitHub username.
- **Repositories Retrieval**: Fetches a list of public repositories for a specified GitHub username.
- **User Information Retrieval**: Fetches public profile information for a specified GitHub username.

All data is fetched live from the GitHub API, ensuring up-to-date information.

## Endpoints

- `GET /api/github/followers/:username` - Retrieves followers of the given GitHub user.
- `GET /api/github/repos/:username` - Retrieves repositories of the given GitHub user.
- `GET /api/github/user/:username` - Retrieves profile information of the given GitHub user.

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js** (version 12 or later)
- **npm** (Node Package Manager)

### Installation

Follow these steps to set up and run the application locally:

1. Clone the Repository.

2. Install the Dependencies.

3. Start the server using the following command.

### API Documentation

For detailed information on how to interact with these endpoints, please refer to our Postman collection:

GitHub API Postman Collectio: https://elements.getpostman.com/redirect?entityId=39847300-a0ee6ff3-cb89-4b95-8e8d-b76882293394&entityType=collection
