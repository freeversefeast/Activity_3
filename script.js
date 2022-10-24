fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817").then(
  res => {
    res.json().then(
      data => {
        console.log(data.data);
        if (data.data.length > 0) {

          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.office + "</td>";
            temp += "<td>" + itemData.position + "</td>";
            temp += "<td>" + itemData.salary + "</td></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)
