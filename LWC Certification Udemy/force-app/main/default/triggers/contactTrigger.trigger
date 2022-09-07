trigger contactTrigger on Contact (before update) {

    if(CheckRecursion.run) {
        System.debug('Trigger logic fired for :' + Trigger.new.size());
        CheckRecursion.run = false;
    } else {
        System.debug('Trigger logic skipped for :' + Trigger.new.size());
    }

}