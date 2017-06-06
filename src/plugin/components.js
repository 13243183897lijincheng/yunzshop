import components from '../components/index.js'

let ComponentExtend = {}
ComponentExtend.install = function (Vue, options) {

	//Object.keys(对象)会返回一个数组，数组的元素是对象的属性；但Object。keys不遍历原型上的属性， for..in  也遍历对象原型链上的熟悉，
  Object.keys(components).forEach((key) => {
	  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
		Vue.component(`${name}`, components[key])
  })
}
export default ComponentExtend