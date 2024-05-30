# News-Mag

News-Mag is a modern news magazine web application built with React and Vite. It provides a fast and efficient development environment, with a focus on performance and code quality.

![image](https://github.com/PeshalaPerera/News-Mag/assets/78086607/cc5faaf6-e3ae-4e13-a1fd-5f983c8ecd63)

## Features

- **React**: Utilizes the latest version of React for building user interfaces.
- **Vite**: Fast development and build tool for modern web projects.
- **TypeScript**: Strongly-typed development with TypeScript support.
- **ESLint**: Ensures code quality and consistency with strict linting rules.
- **News API**: Fetches the latest news using the [News API](https://newsapi.org/).

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.18.0 or higher)
- [npm](https://www.npmjs.com/) (v6.14.0 or higher)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/username/news-mag.git
    cd news-mag
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up your API key for the News API:

    - Create a `.env` file in the root directory.
    - Add your News API key to the `.env` file:

    ```plaintext
    VITE_NEWS_API_KEY=your_news_api_key_here
    ```

### Development

To start the development server:

```sh
npm run dev
```

This will start the Vite development server and you can view the application at `http://localhost:3000`.

### Building

To build the project for production:

```sh
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Preview

To preview the built project:

```sh
npm run preview
```

This will start a local server to preview the production build.

### Linting

To run ESLint and check for any linting errors:

```sh
npm run lint
```

This ensures the code adheres to the project's coding standards and best practices.

## Fetching News

News-Mag fetches the latest news from the [News API](https://newsapi.org/). The News API provides a simple HTTP REST API for searching and retrieving live articles from all over the web. It covers a wide range of sources including major news publishers, blogs, and other media outlets.

### Using the News API

To fetch news articles, News-Mag uses the following URL format:

```javascript
const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
```

- **Base URL**: `https://newsapi.org/v2/top-headlines`
- **Parameters**:
  - `country`: Specifies the country for which you want to get headlines (e.g., `us` for the United States).
  - `category`: Specifies the category of news (e.g., `business`, `entertainment`, `general`, `health`, `science`, `sports`, `technology`).
  - `apiKey`: Your API key from the News API.

### Setting Up the API Key

Ensure you have a valid API key from News API. You can obtain one by signing up at [News API](https://newsapi.org/). Once you have your API key, add it to the `.env` file as follows:

```plaintext
VITE_NEWS_API_KEY=your_news_api_key_here
```

This API key is used to authenticate your requests to the News API and fetch the latest news articles.

---

Replace `username` with the actual GitHub username in the clone URL. This README provides a comprehensive yet concise overview of the project, covering all necessary aspects for users to get started and contribute.
