({
    handleMsgFromLWC : function(component, event, helper) {
        debugger;
        let msg = event.getParam("msg");
        component.set("v.msgFromAura", msg);
    }
})
