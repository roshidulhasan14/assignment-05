

<script>
    let likeCount = 0;
    let coinCount = 100;
    let copyCount = 0;


document.querySelectorAll(".fa-heart").forEach(heart => {
  heart.addEventListener("click", () => {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
  });
});


function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert(`Number ${number} copied to clipboard `);
    copyCount++;
    const navbarBtn = document.querySelector(".navbar-right button");
    if (navbarBtn) {
      navbarBtn.innerText = copyCount + " copy";
    }
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}


function callNumber(serviceName, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make a call ");
    return;
  }

  coinCount -= 20;
  document.getElementById("coinCount").innerText = coinCount;

  alert(`Calling ${serviceName} at ${number} `);

  
  const now = new Date();
  const time = now.toLocaleTimeString();

  
  const historyList = document.getElementById("callHistory");
  const li = document.createElement("li");
  li.id = "fire"; 
  li.className = "flex justify-between border-b pb-1";
  li.innerHTML = `<span>${serviceName} (${number})</span><span class="text-gray-400">${time}</span>`;
  historyList.prepend(li);
}


document.addEventListener("DOMContentLoaded", function () {
  const clearBtn = document.querySelector("#call-box button");
  const historyList = document.getElementById("callHistory");

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      historyList.innerHTML = "";
    });
  }
});

</script>