SELECT Person.firstName,Person.lastName,Address.city,Address.state FROM Person  
Left JOIN Address   
On Person.personId=Address.personId 
Group BY Person.personId Order By Person.personId;  