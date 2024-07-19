<h1 align="center" id="title">Sauce Labs App - Playwright Test</h1>

<p id="description">This repository contains a Playwright test suite for the Sauce Labs demo application using Typescript and the Page Object Model (POM) design pattern.</p>

<h2>Steps:</h2>  
<h3>Prerequisites:</h3>

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)   
<h3>🛠️ Installation Steps:</h3>

<p>1. Clone the repository</p>

```
git clone https://github.com/infinixbolt/Sauce-Labs-App-Playwright-Test.git
cd Sauce-Labs-App-Playwright-Test
```

<p>2. Install dependencies:</p>

```
npm install
```

<p><h3>🛅Environment Variables</h3>
 Create a .env file in the root directory and add the following environment variables:</p>

```
baseURL=http://saucedemo.com   
Username1=standard_user   
Password=secret_sauce
```

<p><h3>🏃Running Test</h3>
 To run the tests, use the following command:</p>

```
npx playwright test

```

<p><h2>🏭Project Structure</h2>  

<b>pages/: Contains the Page Object Model (POM) classes.</b>  
>`cartPageO.ts`: Page object for the cart page.  
>`checkoutPageO.ts`: Page object for the checkout page.  
>`loginPageO.ts`: Page object for the login page.  
>`productPageO.ts`: Page object for the inventory page.  
 

<b>tests/: Contains the test files.</b>  
>`buyTshirt.spec.ts`: Test file for the Sauce Labs demo application.  

<b>test data/: Contains test data used in the tests.</b>  
>`testData.ts`   

<h2>🤝Contributing</h2>

1. Fork the repository.   
2. Create a new branch (git checkout -b feature/your-feature).  
3. Make your changes.  
4. Commit your changes (git commit -m 'Add some feature').  
5. Push to the branch (git push origin feature/your-feature).  
6. Open a pull request.
