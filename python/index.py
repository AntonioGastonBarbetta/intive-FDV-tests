
class BikeCompany:
    
    def ForHour (self, time):
        
        if(time > 0):
        
            return time*5
        
        else:
            
            return "Time error"

    def ForDay (self, time):

        if(time > 0):
        
            return time*20
        
        else:
            
            return "Time error"
        

    def ForWeek (self, time):

        if(time > 0):
        
            return time*60
        
        else:
            
            return "Time error"
        


    def FamilyRental (self, AmountForHour=0, AmountForDay=0, AmountForWeek=0, TimeForHour=0, TimeForDay=0, TimeForWeek=0):


 
        if(AmountForHour <= 5 and AmountForHour >= 3 and TimeForHour > 0 and AmountForDay == 0 and AmountForWeek == 0):

            PriceForHour = self.ForHour(AmountForHour*TimeForHour)
            return PriceForHour*0.7
                

        if(AmountForDay <= 5 and AmountForDay >= 3 and TimeForDay > 0 and AmountForHour == 0 and AmountForWeek == 0):

            PriceForDay = self.ForDay(AmountForDay*TimeForDay)
            return PriceForDay*0.7

        
        if(AmountForWeek <= 5 and AmountForWeek >= 3 and TimeForWeek > 0 and AmountForHour == 0 and AmountForDay == 0):

            PriceForWeek = self.ForWeek(AmountForWeek*TimeForWeek)
            return PriceForWeek*0.7


        return "error values"


