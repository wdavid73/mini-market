import * as Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faCartPlus,
  faCartShopping,
  faBagShopping,
  faClose,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

library.add(fas);
library.add(faCartPlus);
library.add(faCartShopping);
library.add(faBagShopping);
library.add(faClose);
library.add(faPlus);
library.add(faMinus);

Vue.defineComponent("font-awesome-icon", FontAwesomeIcon);
