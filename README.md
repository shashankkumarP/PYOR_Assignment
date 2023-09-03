<h1>Line-chart component using Apache EChart SDK</h1>

This is a website where user can visualise insight's of crypto currency prices using Line chart (Apache Echarts). It is interactive website where user can dynamically  select multiple crypto currencies and can play dimention Row and Column as their best fit.
     
    It is Next.js Project NextJs project bootstrapped with [`create-next-app`].

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Website (Task).


## 🔗 External Liabrary Used

  #### Styled-Component;
  #### Apache Echarts;
  #### React-Select ;


## 🔗 API Used
<h5>Ethereum coin</h5><p>https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365&interval=daily</p>
<h5>Dogecoin coin</h5><p>https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=365&interval=daily</p>
<h5>Solana coin</h5>https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=365&interval=daily

## 🔗 Features Implemented

#### Multi Select

    Here User can select multiple crypto currencies to visualize it's Insight's using Line Chart.

#### Dynamically Change the value of Row and Column

    Here User can Dynamically Change the value of Row's and Column's. Here Graph's will autometically ajust according to Number  of Row, Column Count.
    The Number of Row and Column will dynamically change, If user change the number of  Row's then Column's will be autometically ajusted with respective to number of Graph Present and 
    vice versa.


## 🔗 Technical Insight's

  <li>Here I have used different component's performing different task making the code readable and structured.</li>
  <li>I a'm Using Context-api here for resolving the problem of prop driling.</li>
  <li>Here I have Used Promise.all for making the bulk api call.</li>
  <li>Here I have also Hook's for state management.</li>
  <li>I have used dynamic Grid which Row's and Column's number and width dynamically change with number of selection.</li>
  <li>Minimal Number of Rendering making website fast.</li>
  <li>Used  executable function's.</li>

## 🔗 Few Insight view of website


  <h3 align='center' margin-bottom='20px' >Landing Page Intial Condition</h3>


  <img width="1440" alt="Screenshot 2023-09-03 at 3 20 59 AM" src="https://github.com/shashankkumarP/PYOR_Assignment/assets/67480861/34287e30-fbf7-432a-8089-b50605ce3375">

   <h3 align='center' margin-bottom='20px' >Choosing Two Coins will autometically increase  Row count, Our User can change according to it.</h3>


   <img width="1440" alt="Screenshot 2023-09-03 at 3 21 12 AM" src="https://github.com/shashankkumarP/PYOR_Assignment/assets/67480861/b187db40-2b6b-4874-832e-83b4d24d1574">


<h3 align='center' margin-bottom='20px' >If User will Select 3 Coin's and if user increase number of column count to 2 the number of row count will from 3 to 2  automatically and ui will update. User can make change in row column according to his need. </h3>
     

<img width="1440" alt="Screenshot 2023-09-03 at 3 21 27 AM" src="https://github.com/shashankkumarP/PYOR_Assignment/assets/67480861/405da169-4570-4f8a-bff0-4b2600df03d3">

<h3 align='center' margin-bottom='20px' >If user decrease number of row number of column will autometically increase.</h3>

<img width="1440" alt="Screenshot 2023-09-03 at 3 21 40 AM" src="https://github.com/shashankkumarP/PYOR_Assignment/assets/67480861/d990726f-5548-4394-8002-3b3547fdef57">






## 🔗  Deployments


- [Github-Repo](https://github.com/shashankkumarP/PYOR_Assignment)
- [Deployment](https://pyor-assignment-virid.vercel.app/)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- I take all the responsibility for every single line of code.
- Connect with me on Mail Id: madhav131ex@gmail.com
