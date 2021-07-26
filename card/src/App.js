import './App.css';
import Card from './card'
import './card.css';

function App() {

  let pricedata=[
      {
        plan: "FREE",
        currency: "$",
        price: 0,
        period: "month",
        offers:[
          {
            name:"Single User",
            isEnabled:true
          },
          {
            name:"5GB Storage",
            isEnabled:true
          },
          {
            name: "Unlimited Public Projects",
            isEnabled:true
          },
          {
            name:"Community Access",
            isEnabled:false
          },
          {
            name: "Dedicated phone support",
            isEnabled:false
          },
          {
            name: "Free SubDomain",
            isEnabled:false
          },
          {
            name: "Monthly Status reports",
            isEnabled:false
          }


        ]
      },
      {
        plan: "PLUS",
        currency: "$",
        price: 9,
        period: "month",
        offers:[
          {
            name:"5 User",
            isEnabled:true
          },
          {
            name:"50GB Storage",
            isEnabled:true
          },
          {
            name: "Unlimited Public Projects",
            isEnabled:true
          },
          {
            name:"Community Access",
            isEnabled:true
          },
          {
            name: "Dedicated phone support",
            isEnabled:true
          },
          {
            name: "Free SubDomain",
            isEnabled:true
          },
          {
            name: "Monthly Status reports",
            isEnabled:false
          }


        ]
      },
      {
        plan: "PRO",
        currency: "$",
        price: 49,
        period: "month",
        offers:[
          {
            name:"Unlimited User",
            isEnabled:true
          },
          {
            name:"150GB Storage",
            isEnabled:true
          },
          {
            name: "Unlimited Public Projects",
            isEnabled:true
          },
          {
            name:"Community Access",
            isEnabled:true
          },
          {
            name: "Dedicated phone support",
            isEnabled:true
          },
          {
            name: "Free SubDomain",
            isEnabled:true
          },
          {
            name: "Monthly Status reports",
            isEnabled:true
          }

        ]
      }
  ]



  return (
    <>
  <section class="pricing py-5">
    <div class="container">
    <div class="row">
      {
        pricedata.map((obj)=>{
          return <Card data={obj}></Card>
        })
      }
     


    </div>
    </div>
  </section>
    </>
  );
}

export default App;