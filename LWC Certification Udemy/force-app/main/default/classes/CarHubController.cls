public with sharing class CarHubController {

	@AuraEnabled(cacheable=true)
	public static List<Cars__c> getCarRecords(){
		try {
			if(Schema.sObjectType.Cars__c.isAccessible()) {
				return [ select id,
							Name, 
							EV_Car__c, 
							Control__c, 
							Exshowroom_Price__c, 
							Fuel_Type__c, 
							Number_of_Seats__c,  
							Make__c, 
							Picture_URL__c,  
							Category__c 
							from Cars__c ];
			} else {
				throw new AuraHandledException('Ask admin to set you as proper user');
			}
		} catch (Exception e) {
			throw new AuraHandledException(e.getMessage());
		}
	}

}
