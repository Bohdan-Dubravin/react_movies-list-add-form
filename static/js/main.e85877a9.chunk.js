(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},20:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var a=i(8),r=i.n(a),n=(i(19),i(13)),c=i(9),l=i(10),s=i(14),o=i(12),m=i(2),d=i.n(m),b=(i(20),i(1)),u=(i(21),i(22),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,r=e.imdbUrl;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("figure",{className:"image is-4by3",children:Object(u.jsx)("img",{src:a,alt:"Film logo"})})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("div",{className:"media-left",children:Object(u.jsx)("figure",{className:"image is-48x48",children:Object(u.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(u.jsx)("div",{className:"media-content",children:Object(u.jsx)("p",{className:"title is-8",children:t})})]}),Object(u.jsxs)("div",{className:"content",children:[i,Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:r,children:"IMDB"})]})]})]})},p=function(e){var t=e.movies;return Object(u.jsx)("div",{className:"movies",children:t.map((function(e){return Object(u.jsx)(j,Object(b.a)({},e),e.imdbId)}))})},g=i(5),h=i(6),O=(i(24),/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/),v=function(e){var t=e.onAdd,i=e.allMoviesTitle,a=Object(m.useState)(!1),r=Object(h.a)(a,2),n=r[0],c=r[1],l=Object(m.useState)({title:"",imgUrl:"",imdbUrl:"",imdbId:""}),s=Object(h.a)(l,2),o=s[0],d=s[1],j=Object(m.useState)({title:"",description:"Description",imgUrl:"",imdbUrl:"",imdbId:""}),p=Object(h.a)(j,2),v=p[0],x=p[1];function _(e){var t=e.currentTarget,i=t.name,a=t.value;x((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(g.a)({},i,a))}))}return Object(m.useEffect)((function(){c(Object.values(o).every((function(e){return""===e}))&&Object.values(v).every((function(e){return""!==e})))}),[v,o]),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(v),x({title:"",description:"Description",imgUrl:"",imdbUrl:"",imdbId:""}),c(!0)},children:[Object(u.jsxs)("div",{className:"input-group ".concat(o.title&&"input-group--error"),children:[Object(u.jsx)("label",{className:"input-group__label ".concat(o.title&&"input-group__label--error"),htmlFor:"title",children:"Title"}),Object(u.jsx)("input",{className:"input-group__input",type:"text",name:"title",id:"title",value:v.title,onChange:_,onBlur:function(){v.title.trim()?i.includes(v.title)?d(Object(b.a)(Object(b.a)({},o),{},{title:"Movie is already exist!"})):d(Object(b.a)(Object(b.a)({},o),{},{title:""})):d(Object(b.a)(Object(b.a)({},o),{},{title:"Enter Title!"}))}}),Object(u.jsx)("p",{className:"input-group__errorText",children:o.title})]}),Object(u.jsxs)("div",{className:"input-group",children:[Object(u.jsx)("label",{className:"input-group__label",htmlFor:"description",children:"Description"}),Object(u.jsx)("textarea",{className:"input-group__input input-group__input--textarea",name:"description",id:"description",value:v.description,onChange:_})]}),Object(u.jsxs)("div",{className:"input-group ".concat(o.imgUrl&&"input-group--error"),children:[Object(u.jsx)("label",{className:"input-group__label ".concat(o.imgUrl&&"input-group__label--error"),htmlFor:"imgUrl",children:"ImgUrl"}),Object(u.jsx)("input",{className:"input-group__input",type:"text",name:"imgUrl",id:"imgUrl",value:v.imgUrl,onChange:_,onBlur:function(){v.imgUrl.trim()?v.imgUrl.match(O)?d(Object(b.a)(Object(b.a)({},o),{},{imgUrl:""})):d(Object(b.a)(Object(b.a)({},o),{},{imgUrl:"Enter valid URL address!"})):d(Object(b.a)(Object(b.a)({},o),{},{imgUrl:"Enter imgUrl!"}))}}),Object(u.jsx)("p",{className:"input-group__errorText",children:o.imgUrl})]}),Object(u.jsxs)("div",{className:"input-group ".concat(o.imdbUrl&&"input-group--error"),children:[Object(u.jsx)("label",{className:"input-group__label ".concat(o.imdbUrl&&"input-group__label--error"),htmlFor:"imdbUrl",children:"imdbUrl"}),Object(u.jsx)("input",{className:"input-group__input",type:"text",name:"imdbUrl",id:"imdbUrl",value:v.imdbUrl,onChange:_,onBlur:function(){v.imdbUrl.trim()?v.imdbUrl.match(O)?d(Object(b.a)(Object(b.a)({},o),{},{imdbUrl:""})):d(Object(b.a)(Object(b.a)({},o),{},{imdbUrl:"Enter valid URL address!"})):d(Object(b.a)(Object(b.a)({},o),{},{imdbUrl:"Enter imdbUrl!"}))}}),Object(u.jsx)("p",{className:"input-group__errorText",children:o.imdbUrl})]}),Object(u.jsxs)("div",{className:"input-group ".concat(o.imdbId&&"input-group--error"),children:[Object(u.jsx)("label",{className:"input-group__label ".concat(o.imdbId&&"input-group__label--error"),htmlFor:"imdbId",children:"imdbId"}),Object(u.jsx)("input",{className:"input-group__input",type:"text",name:"imdbId",id:"imdbId",value:v.imdbId,onChange:_,onBlur:function(){v.imdbId.trim()?d(Object(b.a)(Object(b.a)({},o),{},{imdbId:""})):d(Object(b.a)(Object(b.a)({},o),{},{imdbId:"Enter imdbId!"}))}}),Object(u.jsx)("p",{className:"input-group__errorText",children:o.imdbId})]}),Object(u.jsx)("button",{type:"submit",className:"submit-button",disabled:!n,children:"Add new Movie"})]})},x=i(11),_=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(c.a)(this,i);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={movies:x},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(n.a)(e.movies),[t])}}))},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("div",{className:"page-content",children:Object(u.jsx)(p,{movies:e})}),Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsx)(v,{onAdd:this.addMovie,allMoviesTitle:this.state.movies.map((function(e){return e.title}))})})]})}}]),i}(d.a.Component);r.a.render(Object(u.jsx)(_,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e85877a9.chunk.js.map