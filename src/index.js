import Button from './stories/Button';
import Header from "./stories/Header";
import Page from "./stories/Page";

const Components = [Button, Header, Page];
const install = function (Vue) {
 Components.forEach(component => {
   Vue.component(component.name, component)
 })
}

export default {
 install
}
