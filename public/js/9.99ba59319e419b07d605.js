(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{X4qL:function(e,t,s){"use strict";s.r(t);var r=s("XA51"),n=s("2OGF"),o=s("+SZM"),l=s("Z84v"),i=s("Ghf0"),a=s("Ujtf"),u=s("pF+r"),f={components:{InertiaLink:r.b,Layout:o.a,LoadingButton:l.a,CronInput:i.a,SelectInput:a.a,TextInput:u.a},props:{timezones:Array},data:function(){return{form:new n.a({name:null,email:null,phone:null,address:null,city:null,region:null,country:null,postal_code:null})}},methods:{submit:function(){var e=this;this.form.post({url:this.route("questions.store").url(),then:function(t){return r.a.visit(e.route("questions.show",t.id))}})}}},m=s("KHd+"),c=Object(m.a)(f,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("layout",{attrs:{title:"Create Question"}},[s("h1",{staticClass:"mb-8 font-bold text-3xl"},[s("inertia-link",{staticClass:"text-green-400 hover:text-green-600",attrs:{href:e.route("questions")}},[e._v("Questions")]),e._v(" "),s("span",{staticClass:"text-green-400 font-medium"},[e._v("/")]),e._v(" Create\n  ")],1),e._v(" "),s("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-lg"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"p-8 flex flex-wrap"},[s("text-input",{staticClass:"mb-8 w-full",attrs:{error:e.form.errors.first("message"),label:"Message"},model:{value:e.form.fields.message,callback:function(t){e.$set(e.form.fields,"message",t)},expression:"form.fields.message"}}),e._v(" "),s("cron-input",{staticClass:"mb-8 w-full",attrs:{error:e.form.errors.first("expression"),label:"Recurrence"},model:{value:e.form.fields.expression,callback:function(t){e.$set(e.form.fields,"expression",t)},expression:"form.fields.expression"}}),e._v(" "),s("select-input",{staticClass:"w-full",attrs:{error:e.form.errors.first("timezone"),label:"Timezone"},model:{value:e.form.fields.timezone,callback:function(t){e.$set(e.form.fields,"timezone",t)},expression:"form.fields.timezone"}},[s("option",{domProps:{value:null}},[e._v("Default")]),e._v(" "),e._l(e.timezones,function(t){return s("option",{domProps:{value:t}},[e._v(e._s(t))])})],2)],1),e._v(" "),s("div",{staticClass:"px-8 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center"},[s("loading-button",{staticClass:"btn-green",attrs:{loading:e.form.sending,type:"submit"}},[e._v("Create Question")])],1)])])])},[],!1,null,null,null);t.default=c.exports}}]);