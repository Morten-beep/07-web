import { apidata } from "./data.js";
document.getElementById("Send").onclick = () => {
  setInterval(() => {
    document.getElementsByTagName("body")[0].style =
      "background-color:" + getRandomColor();

    document.getElementById("app").innerHTML = "Dato: " + new Date();
  }, 1000);
  document.getElementById("Mars").style = "height:200px";
};
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("fetchimg").onclick = () => {
  console.log("clipped");
  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY"
  ).then((data) =>
    data.json().then((json) => {
      json.photos.forEach((img, counter) => {
        setTimeout(() => {
          document.getElementById("Mars").setAttribute("src", img.img_src);
        }, counter * 1000);
      });

      console.log(json);
    })
  );
};

document.getElementById("fetchweather").onclick = () => {
  const season = apidata["819"].Season;
  if (season === "summer") {
    document.getElementById("app").innerHTML = "Sesong: " + season;
    document
      .getElementById("Mars")
      .setAttribute(
        "src",
        "https://media.cntraveler.com/photos/5ca2606227413200230736ae/16:9/w_2560%2Cc_limit/Summer-Travel_GettyImages-1028278382.jpg"
      );
  } else if (season === "winter") {
    document.getElementById("app").innerHTML = "Sesong:" + season;
    document
      .getElementById("Mars")
      .setAttribute(
        "src",
        "https://wattention.com/wp-content/uploads/2020/07/winter-001-1.jpg"
      );
  }
};
/* Variabel for Mars season api'en*/
var api = {
  "819": {
    First_UTC: "2021-03-16T17:32:59Z",
    Last_UTC: "2021-03-17T18:12:29Z",
    Month_ordinal: 12,
    Northern_season: "late winter",
    PRE: {
      av: 730.402,
      ct: 100681,
      mn: 709.8325,
      mx: 744.4856
    },
    Season: "winter",
    Southern_season: "late summer",
    WD: {
      most_common: null
    }
  },
  "820": {
    First_UTC: "2021-03-17T18:12:34Z",
    Last_UTC: "2021-03-18T18:52:04Z",
    Month_ordinal: 12,
    Northern_season: "late winter",
    PRE: {
      av: 729.279,
      ct: 98400,
      mn: 709.7541,
      mx: 742.948
    },
    Season: "winter",
    Southern_season: "late summer",
    WD: {
      most_common: null
    }
  },
  "821": {
    First_UTC: "2021-03-18T18:52:09Z",
    Last_UTC: "2021-03-19T19:31:39Z",
    Month_ordinal: 12,
    Northern_season: "late winter",
    PRE: {
      av: 729.649,
      ct: 88777,
      mn: 710.0807,
      mx: 744.1994
    },
    Season: "winter",
    Southern_season: "late summer",
    WD: {
      most_common: null
    }
  },
  "824": {
    First_UTC: "2021-03-21T20:50:54Z",
    Last_UTC: "2021-03-22T21:30:25Z",
    Month_ordinal: 12,
    Northern_season: "late winter",
    PRE: {
      av: 731.523,
      ct: 110269,
      mn: 710.0878,
      mx: 745.8282
    },
    Season: "winter",
    Southern_season: "late summer",
    WD: {
      most_common: null
    }
  },
  sol_keys: ["819", "820", "821", "824"],
  validity_checks: {
    "819": {
      PRE: {
        sol_hours_with_data: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        valid: true
      }
    },
    "820": {
      PRE: {
        sol_hours_with_data: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        valid: true
      }
    },
    "821": {
      PRE: {
        sol_hours_with_data: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        valid: true
      }
    },
    "822": {
      PRE: {
        sol_hours_with_data: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        valid: false
      }
    },
    "823": {
      PRE: {
        sol_hours_with_data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23],
        valid: false
      }
    },
    "824": {
      PRE: {
        sol_hours_with_data: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        valid: true
      }
    },
    "825": {
      PRE: {
        sol_hours_with_data: [0, 1, 2, 3, 4, 5, 6, 19, 20, 21, 22, 23],
        valid: false
      }
    },
    "826": {
      PRE: {
        sol_hours_with_data: [0, 1, 2],
        valid: false
      }
    },
    sol_hours_required: 18,
    sols_checked: ["819", "820", "821", "822", "823", "824", "825", "826"]
  }
};

