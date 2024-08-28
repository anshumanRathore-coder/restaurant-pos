import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.jpg";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import burger from "@/assets/foodOptions/burger.png";
import cake from "@/assets/foodOptions/cake.png";
import chinese from "@/assets/foodOptions/chinese.png";
import dosa from "@/assets/foodOptions/dosa.png";
import pasta from "@/assets/foodOptions/pasta.png";
import pizza from "@/assets/foodOptions/pizzas.png";
import rolls from "@/assets/foodOptions/rolls.png";
import shake from "@/assets/foodOptions/shake.png";
import rasmali from "@/assets/foodOptions/rasmalai.png";
import restaurant1 from "@/assets/restaurants/restaurant1.png";
import restaurant2 from "@/assets/restaurants/restaurant2.png";
import restaurant3 from "@/assets/restaurants/restaurant3.png";
import restaurant4 from "@/assets/restaurants/restaurant4.png";
import restaurant5 from "@/assets/restaurants/restaurant5.png";
import restaurant6 from "@/assets/restaurants/restaurant6.png";
import restaurant7 from "@/assets/restaurants/restaurant7.png";
import restaurant8 from "@/assets/restaurants/restaurant8.png";
import restaurant9 from "@/assets/restaurants/restaurant9.png";
import restaurant10 from "@/assets/restaurants/restaurant10.png";
import restaurant11 from "@/assets/restaurants/restaurant11.png";
import restaurant12 from "@/assets/restaurants/restaurant12.png";
import restaurant13 from "@/assets/restaurants/restaurant13.png";
import restaurant14 from "@/assets/restaurants/restaurant14.png";
import restaurant15 from "@/assets/restaurants/restaurant15.png";

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  getStarted,
  check,
  noResult,
  message,
  burger,
  cake,
  chinese,
  dosa,
  pasta,
  pizza,
  rolls,
  shake,
  rasmali,
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
  restaurant5,
  restaurant6,
  restaurant7,
  restaurant8,
  restaurant9,
  restaurant10,
  restaurant11,
  restaurant12,
  restaurant13,
  restaurant14,
  restaurant15,
};

export const icons = {
  arrowDown,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
};

export const onboarding = [
  {
    id: 1,
    title: "The perfect food is just a tap away!",
    description:
      "Your journey begins with RedbirdTab. Find your ideal food effortlessly.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Best restaurants in your hands with RedbirdTab",
    description: "Discover the convenience of finding your yummy lunch with R",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Your hunger, your food. Let's go!",
    description:
      "Enter your destination, sit back, and let us take care of the rest.",
    image: images.onboarding3,
  },
];
export const foodOptions = [
  {
    id: 1,
    name: "Burger",
    image: images.burger,
    description: "Authentic Indian curries and tandoori delights.",
  },
  {
    id: 2,
    name: "Cake",
    image: images.cake,
    description: "Authentic Indian curries and tandoori delights.",
  },
  {
    id: 3,
    name: "Chinese",
    image: images.chinese,
    description: "Authentic Indian curries and tandoori delights.",
  },
  {
    id: 4,
    name: "Dosa",
    image: images.dosa,
    description: "Authentic Indian curries and tandoori delights.",
  },
  {
    id: 5,
    name: "Pasta",
    image: images.pasta,
    description: "Authentic Indian curries and tandoori delights.",
  },
  {
    id: 6,
    name: "Pizza",
    image: images.pizza,
    description: "Authentic Indian curries and tandoori delights.",
  },
  {
    id: 7,
    name: "Rools",
    image: images.rolls,
    description: "Authentic Indian curries and tandoori delights.",
  },
  {
    id: 8,
    name: "Shake",
    image: images.shake,
    description: "Authentic Indian curries and tandoori delights.",
  },
  {
    id: 9,
    name: "Rasmaili",
    image: images.rasmali,
    description: "Authentic Indian curries and tandoori delights.",
  },
];
export const neighbourhoodRestaurant = [
  {
    id: 1,
    name: "Ghungroo seth",
    rating: 4.2,
    delivery_time: "25-30 mins",
    location: "Bais godam",
    img: images.restaurant8,
  },
  {
    id: 2,
    name: "Sethi Bar-Be-Que",
    rating: 4.4,
    delivery_time: "25-30 mins",
    location: "Raja park",
    img: images.restaurant9,
  },
  {
    id: 3,
    name: "Dominos pizza",
    rating: 4.2,
    delivery_time: "20-25 mins",
    location: "Lal kothi",
    img: images.restaurant10,
  },
  {
    id: 4,
    name: "Big bowl",
    rating: 4.2,
    delivery_time: "25-30 mins",
    location: "C Scheme",
    img: images.restaurant11,
  },
  {
    id: 5,
    name: "Roastery coffee",
    rating: 4.6,
    delivery_time: "25-30 mins",
    location: "C Scheme",
    img: images.restaurant12,
  },
];
export const topRestaurants = [
  {
    id: 1,
    name: "Chinese Wok",
    rating: 4.3,
    delivery_time: "30-35 mins",
    location: "Vivek vihar",
    img: images.restaurant1,
    description: "Authentic Indian curries and tandoori delights.",
    offer: "Extra 10% OFF",
  },
  {
    id: 2,
    name: "Burger farm",
    rating: 4.6,
    delivery_time: "30-35 mins",
    location: "C scheme",
    img: images.restaurant2,
    description: "Juicy gourmet burgers with all the trimmings.",
    offer: "Extra 30% OFF",
  },
  {
    id: 3,
    name: "Burger King",
    rating: 4.4,
    delivery_time: "35-40 mins",
    location: "Adarsh Nagar",
    img: images.restaurant3,
    description: "Fresh sushi rolls and sashimi platters.",
    offer: "Free delivery",
  },
  {
    id: 4,
    name: "Subway",
    rating: 4.3,
    delivery_time: "30-35 mins",
    location: "C scheme",
    img: images.restaurant4,
    description: "Handcrafted pasta in rich, savory sauces.",
    offer: "Extra 25% OFF",
  },
  {
    id: 5,
    name: "Kwality walls icecream",
    rating: 4.4,
    delivery_time: "20-25 mins",
    location: "Lal kothi",
    img: images.restaurant5,
    description: "Wood-fired pizzas with a crispy crust.",
    offer: "Extra 20% OFF",
  },
  {
    id: 6,
    name: "Tapri central",
    rating: 4.7,
    delivery_time: "20-25 mins",
    location: "C scheme",
    img: images.restaurant6,
    description: "Vibrant Mexican tacos and street food.",
    offer: "Free Delivery",
  },
  {
    id: 7,
    name: "DMB sweet",
    rating: 4.5,
    delivery_time: "20-25 mins",
    location: "Lal kothi",
    img: images.restaurant7,
    description: "Succulent grilled meats and BBQ favorites.",
    offer: "Extra 40% OFF",
  },

  {
    id: 8,
    name: "Ghungroo seth",
    rating: 4.2,
    delivery_time: "25-30 mins",
    location: "Bais godam",
    img: images.restaurant8,
    description: "Stir-fried noodles with bold Asian flavors.",
    offer: "Extra 55% OFF",
  },
  {
    id: 9,
    name: "Sethi Bar-Be-Que",
    rating: 4.4,
    delivery_time: "25-30 mins",
    location: "Raja park",
    img: images.restaurant9,
    description: "Fresh and healthy salads with a twist.",
    offer: "Free delivery",
  },
  {
    id: 10,
    name: "Dominos pizza",
    rating: 4.2,
    delivery_time: "20-25 mins",
    location: "Lal kothi",
    img: images.restaurant10,
    description: "Catch-of-the-day seafood cooked to perfection.",
    offer: "Free delivery",
  },
  {
    id: 11,
    name: "Big bowl",
    rating: 4.2,
    delivery_time: "25-30 mins",
    location: "C Scheme",
    img: images.restaurant11,
    description: "Plant-based dishes that satisfy every craving.",
    offer: "Extra 10% OFF",
  },
  {
    id: 12,
    name: "Roastery coffee",
    rating: 4.6,
    delivery_time: "25-30 mins",
    location: "C Scheme",
    img: images.restaurant12,
    description: "Classic sandwiches and deli specials.",
    offer: "Extra 10% OFF",
  },
  {
    id: 13,
    name: "Mc donald",
    rating: 4.4,
    delivery_time: "25-30 mins",
    location: "Civil lines",
    img: images.restaurant13,
    description: "Decadent desserts and pastries to indulge in.",
    offer: "Free delivery",
  },
  {
    id: 14,
    name: "KFC",
    rating: 4.3,
    delivery_time: "30-35 mins",
    location: "Malviya nagar",
    img: images.restaurant14,
    description: "Spicy curries from around the world.",
    offer: "Extra 30% OFF",
  },
  {
    id: 15,
    name: "Tan sukh dhabha",
    rating: 4.3,
    delivery_time: "30-35 mins",
    location: "C Scheme",
    img: images.restaurant15,
    description: "All-day breakfast with eggs, pancakes, and more.",
    offer: "Extra 10% OFF",
  },
];
export const data = {
  onboarding,
  foodOptions,
};
