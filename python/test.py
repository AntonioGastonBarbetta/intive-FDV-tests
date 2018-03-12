import unittest
from index import BikeCompany

class TestBikeCompany(unittest.TestCase):

    def test_ForHour(self):

        Test = BikeCompany()

        self.assertEqual(Test.ForHour(1), 5)
        self.assertEqual(Test.ForHour(3), 15)
        self.assertEqual(Test.ForHour(10), 50)
        self.assertEqual(Test.ForHour(-1), "Time error")
        self.assertEqual(Test.ForHour(-8), "Time error")


    def test_ForDay(self):

        Test = BikeCompany()

        self.assertEqual(Test.ForDay(1), 20)
        self.assertEqual(Test.ForDay(3), 60)
        self.assertEqual(Test.ForDay(10), 200)
        self.assertEqual(Test.ForDay(-3), "Time error")
        self.assertEqual(Test.ForDay(-8), "Time error")


    def test_ForWeek(self):

        Test = BikeCompany()

        self.assertEqual(Test.ForWeek(1), 60)
        self.assertEqual(Test.ForWeek(3), 180)
        self.assertEqual(Test.ForWeek(10), 600)
        self.assertEqual(Test.ForWeek(-3), "Time error")
        self.assertEqual(Test.ForWeek(-8), "Time error")


    def test_FamilyRental(self):

        Test = BikeCompany()

        self.assertEqual(Test.FamilyRental(AmountForHour=3, TimeForHour=3), 31.499999999999996)
        self.assertEqual(Test.FamilyRental(AmountForHour=5, TimeForHour=3), 52.5)
        self.assertEqual(Test.FamilyRental(AmountForHour=5, TimeForHour=0), "error values")
        self.assertEqual(Test.FamilyRental(AmountForHour=5, TimeForHour=-3), "error values")
        self.assertEqual(Test.FamilyRental(AmountForHour=6, TimeForHour=5), "error values")
        self.assertEqual(Test.FamilyRental(AmountForHour=2, TimeForHour=5), "error values")


        self.assertEqual(Test.FamilyRental(AmountForDay=3, TimeForDay=1), 42)
        self.assertEqual(Test.FamilyRental(AmountForDay=5, TimeForDay=1), 70)
        self.assertEqual(Test.FamilyRental(AmountForDay=5, TimeForDay=0), "error values")
        self.assertEqual(Test.FamilyRental(AmountForDay=5, TimeForDay=-3), "error values")
        self.assertEqual(Test.FamilyRental(AmountForDay=6, TimeForDay=5), "error values")
        self.assertEqual(Test.FamilyRental(AmountForDay=2, TimeForDay=5), "error values")


        self.assertEqual(Test.FamilyRental(AmountForWeek=3, TimeForWeek=1), 125.99999999999999)
        self.assertEqual(Test.FamilyRental(AmountForWeek=5, TimeForWeek=1), 210)
        self.assertEqual(Test.FamilyRental(AmountForWeek=5, TimeForWeek=0), "error values")
        self.assertEqual(Test.FamilyRental(AmountForWeek=5, TimeForWeek=-3), "error values")
        self.assertEqual(Test.FamilyRental(AmountForWeek=6, TimeForWeek=5), "error values")
        self.assertEqual(Test.FamilyRental(AmountForWeek=2, TimeForWeek=5), "error values")


        self.assertEqual(Test.FamilyRental(AmountForWeek=1, AmountForDay=3, TimeForDay=1, TimeForWeek=1), "error values")
        self.assertEqual(Test.FamilyRental(AmountForWeek=1, AmountForHour=3, TimeForHour=1, TimeForWeek=1), "error values")
        self.assertEqual(Test.FamilyRental(AmountForDay=1, AmountForHour=3, TimeForDay=1, TimeForHour=1), "error values")
        self.assertEqual(Test.FamilyRental(AmountForDay=1, AmountForHour=1, AmountForWeek=1, TimeForDay=1, TimeForHour=1, TimeForWeek=1), "error values")

if __name__ == "__main__":
    unittest.main()