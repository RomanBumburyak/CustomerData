/*
{
  "gender":"male",
  "name":{
    "title":"mr",
    "first":"curtis",
    "last":"ryan"
  },
  "location":{"
    street":"8073 rolling green rd",
    "city":"south valley",
    "state":"missouri",
    "postcode":99356
  },
  "email":"curtis.ryan@example.com",
  "login":{
    "username":"beautifulmouse544",
    "password":"beardog",
    "salt":"kL9djbKk",
    "md5":"67bedf8307958366eb547d6bc8f23a9a",
    "sha1":"33f493d4301964dff559850470758e8f4fa78c13",
    "sha256":"4a9e0d3fd2cafc6f6a1fc05cd6b35ceb0cfe08fa2b9abc07f3bfad5c977be86c"
  },
  "dob":"1967-10-29 09:16:09",
  "registered":"2007-01-12 19:26:30",
  "phone":"(518)-664-5821",
  "cell":"(385)-917-9080",
  "id":{"
    name":"SSN",
    "value":"544-97-7715"
  },
  "picture":{"
    large":"https://randomuser.me/api/portraits/men/0.jpg",
    "medium":"https://randomuser.me/api/portraits/med/men/0.jpg",
    "thumbnail":"https://randomuser.me/api/portraits/thumb/men/0.jpg"},"nat":"US"
  }
}
*/


 let container = document.querySelector(".container");
  let template = '';

  for (var i = 0; i < customers.results.length; i++) {
    var large_url = customers.results[i].picture.large;
      template += `
        <div class="contactInformation">
          <img class="profilePic" src="${large_url}"/>
          <h3>
            ${customers.results[i].name.first} ${customers.results[i].name.last}
          </h3>
          <div class="email">
           ${customers.results[i].email}
          </div>
          <div class="location">
            ${customers.results[i].location.street}
            <br>
            ${customers.results[i].location.city}
            ${customers.results[i].location.state}
            ${customers.results[i].location.postcode}
            <br>
            ${customers.results[i].phone}
          </div>
          <div class="SSN">
            ${customers.results[i].id.value}
          </div>
        </div>

      `;

    // console.log(large_url);
    container.innerHTML = template
 }
