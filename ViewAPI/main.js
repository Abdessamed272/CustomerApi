
document.addEventListener("DOMContentLoaded", () => {

    //API: 

    let url = `https://localhost:7198/Customer`

    var allcustomer = document.querySelector(".allcustomers");
    var customerbyid = document.querySelector(".customerbyid");
    var customerid = document.querySelector("#customerid");
    var addcustomer = document.querySelector(".addcustomer");

    allcustomer.addEventListener('click', () => {

        fetch(url)
            .then(data => data.json())
            .then((data) => {

                var customerList = document.querySelector(".listallcustoomer")
                customerList.innerHTML = ` `
                for (const customer of data) {
                    console.log(data)
                    console.log(customer)
                    customerList.innerHTML += `
                <br/>
                <li>
                    <ul>
                        <li>
                            Id: ${customer.id}
                        </li>

                        <li>
                           Name:  ${customer.name}
                        </li>

                        <li>
                           Phone Number:  ${customer.phoneNumber}
                        </li>

                        <li>
                        Category :   ${customer.category}
                     </li>
                    </ul>
                </li>`
                }
            });



        // var findFont = document.querySelector(".findFont");

        // findFont.addEventListener('click', () => {

        //     isFound = FindNearestFont(statrPoint, "700")
        //     console.log(isFound)


        // });
    })

    customerbyid.addEventListener('click', () => {

        fetch(url + `/${customerid.value}`)
            .then(customer => customer.json())
            .then((customer) => {

                var customerList = document.querySelector(".listallcustoomer")
                customerList.innerHTML = ` `

                console.log(customer)
                customerList.innerHTML += `
                <br/>
                <li>
                    <ul>
                        <li>
                            Id: ${customer.id}
                        </li>

                        <li>
                           Name:  ${customer.name}
                        </li>

                        <li>
                           Phone Number:  ${customer.phoneNumber}
                        </li>

                        <li>
                        Category :   ${customer.category}
                     </li>
                    </ul>
                </li>`
            });



        //             <div class="mb-3">
        //   <label for="exampleFormControlInput1" class="form-label">Email address</label>
        //   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        // </div>
        // <div class="mb-3">
        //   <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        //   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        // </div>


        // var findFont = document.querySelector(".findFont");

        // findFont.addEventListener('click', () => {

        //     isFound = FindNearestFont(statrPoint, "700")
        //     console.log(isFound)


        // });
    })

// Access the form element...
const form = document.getElementById( "Addcustomer" );

// ...and take over its submit event.
form.addEventListener( "submit", function (event) {
   event.preventDefault();
  AddCustomer();
} );

});


function AddCustomer() {

    let url = `https://localhost:7198/Customer`

    // console.log(url)


    var name = document.forms["Addcustomer"]["Name"];
    var Phonenumber = document.forms["Addcustomer"]["Phonenumber"];
    var Category = document.forms["Addcustomer"]["Category"];


    //checks if name field is empty
    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    //checks if name field is empty
    if (Phonenumber.value == "") {
        window.alert("Please enter your Phonenumber.");
        Phonenumber.focus();
        return false;
    }

    //checks if name field is empty
    if (Category.value == "") {
        window.alert("Please enter your Category.");
        Category.focus();
        return false;
    }
    console.log(Number(Category.value));
    const data = {
        "name": name.value,
        "phoneNumber": Phonenumber.value,
        "category": Number(Category.value)
    };



    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })

}