// Owl Carousel script
$('#first-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: 2000,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2

    },
    1000: {
      items: 3
    }
  }
})
// Owl Carousel end

// Owl Carousel Second
$('#second-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: false,
  dots: false,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2

    },
    1000: {
      items: 3
    }
  }
})
// Owl Carousel end
// Owl Carousel GenZ Banner
$('#gen-zCarousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  dots: false,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2

    },
    1000: {
      items: 3
    }
  }
})
// Owl Carousel end
// sunsational offer Banner
$('#sun-sational').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: false,
  dots: false,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2

    },
    1000: {
      items: 3
    }
  }
})
// clearance sale
$('#clearanceSale').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: false,
  dots: false,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2

    },
    1000: {
      items: 3
    }
  }
})
// Brand product for Brand Love
$('#BrandProduct').owlCarousel({
  loop: false,
  margin: 15,
  nav: true,
  autoplay: false,
  dots: false,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3

    },
    1000: {
      items: 6
    }
  }
})
// Brand product for Brand Love
$('#VideoSection').owlCarousel({
  loop: false,
  margin: 15,
  nav: true,
  autoplay: false,
  dots: false,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2

    },
    1000: {
      items: 4
    }
  }
})



const blackbg = document.querySelector(".popoverbg-dark");

// Popover configurations
const popovers = [
  {
    trigger: document.querySelector(".onclickDisplaypopover"),
    target: document.querySelector(".onclickDisplaypopover").nextElementSibling
  },
  {
    trigger: document.querySelector(".Enterpincodebtn"),
    target: document.querySelector(".getuserpincode")
  },
  {
    trigger: document.querySelector("#search-input"),
    target: document.querySelector(".inputPopover")
  },
  {
    trigger: document.querySelector("#shoppinglisticon"),
    target: document.querySelector(".shoppingList")
  },
  {
    trigger: document.querySelector("#mobilelistbutton"),
    target: document.querySelector(".mobilesignupbtn")
  }
];

// Hide all popovers function
const hideAllPopovers = () => {
  popovers.forEach(({ target }) => {
    target.classList.replace('d-block', 'd-none');
  });
  blackbg.classList.replace('d-block', 'd-none');
  // add overflow-auto when users close the modal
  $('body').css("overflow", "auto");
};

// Add click events to each trigger
popovers.forEach(({ trigger, target }) => {
  trigger.addEventListener("click", () => {
    const isHidden = target.classList.contains("d-none");
    hideAllPopovers(); // hide all others
    if (isHidden) {
      target.classList.replace("d-none", "d-block");
      blackbg.classList.replace("d-none", "d-block");
      // add overflow-hidden when users open the modal
      $('body').css("overflow", "hidden");
    }
  });
});

// Black background click (to close all popovers)
blackbg.addEventListener("click", hideAllPopovers);

//shopping list Xmark sign 
let closeShoppinglist = document.querySelector(".closeShoppinglist")
let shoppingList = document.querySelector(".shoppingList")
closeShoppinglist.addEventListener("click", () => {
  shoppingList.classList.replace('d-block', 'd-none')
  blackbg.classList.replace("d-block", "d-none");
  // add overflow-auto when users close the modal
  $('body').css("overflow", "auto");
})

//itemtextarea increase height
const textarea = document.getElementById("itemTextarea");
textarea.addEventListener("input", () => {
  textarea.style.height = "auto"; // Reset first
  textarea.style.height = textarea.scrollHeight + "px"; // Set to scrollHeight
});

//Clear Shopping List input when click clear btn
let clearbtn = document.querySelector(".clearbtn")
clearbtn.addEventListener("click", () => {
  textarea.value = ''
})



const pincodeInput = document.getElementById("getPincode");
const pincodesubmitBtn = document.getElementById("pincodesubmitBtn");
const cityView = document.querySelector(".cityView");
const changebordercolor = document.querySelector(".changebordercolor")
const deliverylocation = document.querySelector(".deliverylocation")

let District = "";
let state = "";
let pincode = "";
let isDeliveryAvailable = false;

async function fetchData(pincodeValue) {
  try {
    const response = await fetch(`https://api.postalpincode.in/pincode/${pincodeValue}`);
    const data = await response.json();

    if (
      data[0].Status === "Success" &&
      Array.isArray(data[0].PostOffice) &&
      data[0].PostOffice.length > 0
    ) {
      const getcity = data[0].PostOffice[0];
      District = getcity.District;
      state = getcity.State;
      isDeliveryAvailable = true;

      cityView.innerHTML = `
        <span>${District},</span>
        <span>${state}</span>
      `;

      changebordercolor.classList.replace("border-MediumDark", "border-success");
    } else {
      isDeliveryAvailable = false;
      cityView.innerHTML = `<span class="darkRed">We are currently not delivering at this location.</span>`;
      changebordercolor.classList.replace("border-MediumDark", "border-danger");
      changebordercolor.classList.replace("border-success", "border-danger");
    }
  } catch (error) {
    console.error("Error:", error);
    isDeliveryAvailable = false;
  }
}

pincodeInput.addEventListener("input", function () {
  pincode = this.value.replace(/[^0-9]/g, "").slice(0, 6);
  this.value = pincode;

  if (pincode.length === 6) {
    fetchData(pincode);
    pincodesubmitBtn.classList.replace("opacity-25", "opacity-100");
  } else {
    isDeliveryAvailable = false;
    pincodesubmitBtn.classList.replace("opacity-100", "opacity-25");
    cityView.innerHTML = "";
    changebordercolor.classList.replace("border-success", "border-MediumDark");
    changebordercolor.classList.replace("border-danger", "border-MediumDark");
  }
});
getuserpincode = document.querySelector(".getuserpincode")
pincodesubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (isDeliveryAvailable) {
    deliverylocation.innerText = deliverylocation.innerText = `${District} ${pincode}`;
    blackbg.classList.replace("d-block", "d-none");
    getuserpincode.classList.replace("d-block", "d-none");
    // add overflow-auto when users close the modal
    $('body').css("overflow", "auto");
  }
});

//--------------- Reverse GeoCoding
let detectLocation = document.querySelector(".detectLocation");

detectLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    alert("Geolocation is not supported.");
  }
});

async function successCallback(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("Latitude:", lat, "Longitude:", lon);

  try {
    const geoRes = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=67fa9fb0f0290776272580xqnca7eda`);
    const geoData = await geoRes.json();
    console.log(geoData)

    const postalCode = geoData.address.postcode;
    const city = geoData.address.city;
    console.log(postalCode, city)

    // Update input and UI
    deliverylocation.innerText = deliverylocation.innerText = `${city} ${postalCode}`;

    if (!postalCode || !city) {
      alert("Failed to detect postal details.");
      return;
    }

  } catch (err) {
    console.error("Location detection failed:", err);
    alert("Something went wrong while detecting your location.");
  }
}

function errorCallback(error) {
  console.error("Geolocation Error:", error);
  alert("Permission denied or unable to detect your location.");
}

// Electronic zone
let electronicZoneproduct = document.querySelector(".electroniczonegetdatafromapi")
async function electronicZone() {
  let allproducts = ""
  let call = await fetch(`https://dummyjson.com/products/search?q=phone`)
  let output = await call.json()
  let products = output.products
  products.forEach((product) => {
    let { title, images, description, price, discountPercentage } = product;
    const firstImage = images[0]; // Get first image manually
    let MRP = Math.round((price * 100) / (100 - discountPercentage))

    // put api data into UI
    allproducts += `
                    <div class="item">
                            <div class="bg-white rounded-4">
                                <figure class=" position-relative pt-3 px-3">
                                    <img src="${firstImage}" alt="${title}" class="same-size-img">
                                    <figure class="position-absolute bg-light rounded-circle d-flex align-items-center justify-content-center productloveimg">
                                        <img src="images/download.webp" alt="white love" class="d-block pt-2" style="width: 20px;">
                                    </figure>
                                </figure>
                                <div class="px-2 d-flex flex-column gap-2">
                                    <p class="text-truncate2lines fw-bolder mb-0" style="font-size: 14px;">${description}</p>
                                    <p class="fw-bold mb-0">₹${price}</p>
                                    <div class="d-flex align-items-center justify-content-start pb-2 gap-2">
                                        <p class="m-0 fw-bold" style="color: #b5b5b5; font-size: 14px;"><del>₹${MRP}.00</del></p>
                                        <span class=" fw-bold text-success px-1 rounded-1" style="font-size: 12px; background-color: #e5f7ee;">${discountPercentage}% OFF</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
  })
  electronicZoneproduct.innerHTML = allproducts;

  // Owl Carousel electronic Zone
  $('#electronicZone-Carousel').owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    autoplay: false,
    dots: false,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3

      },
      1000: {
        items: 6
      }
    }
  })
  // Owl Carousel end
}
electronicZone()

// Groceries api
let groceries = document.querySelector("#IceCreamcorner")
async function groceriesProduct() {
  let finalproductlist = ""
  let jsondata = await fetch('https://dummyjson.com/products/category/groceries')
  let data = await jsondata.json()
  let allproducts = data.products
  allproducts.forEach((product) => {
    let { description, discountPercentage, price, thumbnail, title } = product;
    let MRP = Math.round((price * 100) / (100 - discountPercentage))

    // put api data into UI
    finalproductlist += `
                    <div class="item">
                            <div class="bg-white rounded-4">
                              <figure class=" position-relative pt-3 px-3">
                                <img src="${thumbnail}" alt="${title}" class="same-size-img">
                                <figure class="position-absolute bg-light rounded-circle d-flex align-items-center justify-content-center productloveimg">
                                  <img src="images/download.webp" alt="white love" class="d-block pt-2" style="width: 20px;">
                                </figure>
                              </figure>
                              <div class="px-2 d-flex flex-column gap-2">
                                <p class="text-truncate2lines fw-bolder mb-0" style="font-size: 14px;">${description}</p>
                                <p class="fw-bold mb-0">₹${price}</p>
                                <div class="d-flex align-items-center justify-content-start pb-2 gap-2">
                                  <p class="m-0 fw-bold" style="color: #b5b5b5; font-size: 14px;"><del>₹${MRP}.00</del></p>
                                  <span class=" fw-bold text-success px-1 rounded-1" style="font-size: 12px; background-color: #e5f7ee;">${discountPercentage}% OFF</span>
                                </div>
                              </div>
                              <div class="w-100 d-flex align-items-center justify-content-center p-2">
                                <button class="btn rounded-pill removehoverEffect fw-semibold text-darkBlue fw-bolder w-100">Add</button>
                              </div>
                            </div>
                    </div>
                `

  })
  groceries.innerHTML = finalproductlist
  // Groceries Zone
  $('#IceCreamcorner').owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    autoplay: false,
    dots: false,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3

      },
      1000: {
        items: 6
      }
    }
  })
}
groceriesProduct()

const videoWrappers = document.querySelectorAll('.video');

videoWrappers.forEach(wrapper => {
  const video = wrapper.querySelector('video');
  const playBtn = wrapper.querySelector('.video-btns');
  const soundBtn = wrapper.querySelector('.soundbtn');
  const soundImg = soundBtn?.querySelector('img');

  // Force mute initially
  video.muted = true;

  // On hover play
  wrapper.addEventListener('mouseenter', () => {
    video.play();
    if (playBtn) playBtn.style.display = 'none';
  });

  wrapper.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    if (playBtn) playBtn.style.display = 'block';
  });

  // Toggle sound on click
  soundBtn?.addEventListener('click', () => {
    video.muted = !video.muted;
    if (video.muted) {
      soundImg.src = 'images/sound-off.svg';
      soundImg.alt = 'sound-off';
    } else {
      soundImg.src = 'images/sound on.svg';
      soundImg.alt = 'sound on';
    }
  });
});

// Electronic zone
let fashioncollectionfromapi = document.querySelector(".fashioncollectionfromapi")
async function fashioncollection() {
  let allproducts = ""
  let call = await fetch(`https://dummyjson.com/products/search?q=fashion`)
  let output = await call.json()
  let products = output.products
  products.forEach((product) => {
    let { title, images, description, price, discountPercentage } = product;
    const firstImage = images[0]; // Get first image manually
    let MRP = Math.round((price * 100) / (100 - discountPercentage))

    // put api data into UI
    allproducts += `
                    <div class="item">
                            <div class="bg-white rounded-4">
                                <figure class=" position-relative pt-3 px-3">
                                    <img src="${firstImage}" alt="${title}" class="same-size-img">
                                    <figure class="position-absolute bg-light rounded-circle d-flex align-items-center justify-content-center productloveimg">
                                        <img src="images/download.webp" alt="white love" class="d-block pt-2" style="width: 20px;">
                                    </figure>
                                </figure>
                                <div class="px-2 d-flex flex-column gap-2">
                                    <p class="text-truncate2lines fw-bolder mb-0" style="font-size: 14px;">${description}</p>
                                    <p class="fw-bold mb-0">₹${price}</p>
                                    <div class="d-flex align-items-center justify-content-start pb-2 gap-2">
                                        <p class="m-0 fw-bold" style="color: #b5b5b5; font-size: 14px;"><del>₹${MRP}.00</del></p>
                                        <span class=" fw-bold text-success px-1 rounded-1" style="font-size: 12px; background-color: #e5f7ee;">${discountPercentage}% OFF</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
  })
  fashioncollectionfromapi.innerHTML = allproducts;

  // fashioncollection
  $('#fashioncollection').owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    autoplay: false,
    dots: false,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3

      },
      1000: {
        items: 6
      }
    }
  })
  // Owl Carousel end
}
fashioncollection()
