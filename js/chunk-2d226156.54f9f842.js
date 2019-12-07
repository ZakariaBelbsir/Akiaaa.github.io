(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226156"],{e6c2:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("h3",[e._v("Edit Employee #"+e._s(e.employee_id))]),o("v-form",{ref:"updateEmployeeForm",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[o("v-text-field",{attrs:{label:"Employee ID",required:"",rules:e.idRules,readonly:""},model:{value:e.employee_id,callback:function(t){e.employee_id=t},expression:"employee_id"}}),o("v-text-field",{attrs:{label:"Name",required:"",rules:e.nameRules,readonly:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),o("v-text-field",{attrs:{label:"Department",required:"",rules:e.deptRules},model:{value:e.dept,callback:function(t){e.dept=t},expression:"dept"}}),o("v-text-field",{attrs:{label:"Position",required:"",rules:e.posRules},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}}),o("v-btn",{staticClass:"mx-4 mt-3",attrs:{type:"submit",color:"blue"}},[e._v("Update Employee")]),o("v-btn",{staticClass:"mt-3",attrs:{color:"red",to:{name:"view-employee",params:{employee_id:this.$route.params.id}}}},[e._v("Cancel")]),o("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorMessage?e.errorMessage:""))])],1)],1)},n=[],i=(o("b0c0"),o("159b"),o("cdf92")),r={name:"EditEmployee",data:function(){return{employee_id:"",name:"",dept:"",position:"",errorMessage:"",nameRules:[function(e){return!!e||"You must provide an employee's name"},function(e){return e.length>=3||"Employee's name should contain at least 3 characters."}],deptRules:[function(e){return!!e||"Department is required"}],posRules:[function(e){return!!e||"Position is required"}],idRules:[function(e){return!!e||"Employee ID is required"}]}},beforeCreate:function(){var e=this;i["a"].collection("employees").where("employee_id","==",this.$route.params.id).get().then((function(t){return t.forEach((function(t){console.log(t.data()),e.employee_id=t.data().employee_id,e.name=t.data().name,e.position=t.data().position,e.dept=t.data().dept}))}))},methods:{updateEmployee:function(){var e=this;this.$refs.updateEmployeeForm.validate()?i["a"].collection("employees").where("employee_id","==",this.$route.params.id).get().then((function(t){return t.forEach((function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}),e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})}))})):this.errorMessage="You must fill all fields before submitting the form."}}},l=r,s=o("2877"),u=o("6544"),p=o.n(u),d=o("8336"),m=o("a523"),c=o("4bd4"),f=o("8654"),y=Object(s["a"])(l,a,n,!1,null,"5632a7fa",null);t["default"]=y.exports;p()(y,{VBtn:d["a"],VContainer:m["a"],VForm:c["a"],VTextField:f["a"]})}}]);
//# sourceMappingURL=chunk-2d226156.54f9f842.js.map