"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[644],{9644:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var a=i(6252),n=i(3577);const s=t=>((0,a.dD)("data-v-6f1e6776"),t=t(),(0,a.Cn)(),t),l={class:"weweb-auth-settings-edit__invitation ww-typo-sub-text mb-2"},o=["innerHTML"],c=s((()=>(0,a._)("div",{class:"ww-typo-link mb-2 weweb-auth-settings-edit__description"},[(0,a.Uk)(" If you want to change the invitation email template "),(0,a._)("a",{class:"ww-editor-link",href:"https://support.weweb.io/ticket/new/",target:"_blank"},"contact us"),(0,a.Uk)(". ")],-1))),r={class:"weweb-auth-settings-edit__invitation ww-typo-sub-text mb-2"},w=["innerHTML"],u=s((()=>(0,a._)("div",{class:"ww-typo-link mb-2 weweb-auth-settings-edit__description"},[(0,a.Uk)(" If you want to change the verification code email template "),(0,a._)("a",{class:"ww-editor-link",href:"https://support.weweb.io/ticket/new/",target:"_blank"},"contact us"),(0,a.Uk)(". ")],-1)));function p(t,e,i,s,p,b){const m=(0,a.up)("wwEditorFormRow");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m,{label:"Invitation email"},{default:(0,a.w5)((()=>[(0,a._)("div",l,(0,n.zw)(b.emailInvitationSubject),1),(0,a._)("div",{class:"weweb-auth-settings-edit__invitation ww-typo-caption mb-1",innerHTML:b.emailInvitationMessage},null,8,o),c])),_:1}),(0,a.Wm)(m,{label:"Verification code email"},{default:(0,a.w5)((()=>[(0,a._)("div",r,(0,n.zw)(b.emailVerificationSubject),1),(0,a._)("div",{class:"weweb-auth-settings-edit__invitation ww-typo-caption mb-1",innerHTML:b.emailVerificationMessage},null,8,w),u])),_:1})],64)}var b={props:{settings:{type:Object,required:!0}},emits:["update:settings"],computed:{emailInvitationSubject(){return this.settings.publicData.invitationEmail.EmailSubject},emailInvitationMessage(){return this.settings.publicData.invitationEmail.EmailMessage.replace("{username}","{email}").replace("{####}","{password}")},emailVerificationSubject(){return this.settings.publicData.verificationEmail.EmailSubject},emailVerificationMessage(){return this.settings.publicData.verificationEmail.EmailMessage.replace("{####}","{code}")}}},m=i(3744);const d=(0,m.Z)(b,[["render",p],["__scopeId","data-v-6f1e6776"]]);var _=d}}]);