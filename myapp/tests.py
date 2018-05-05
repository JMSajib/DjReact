from django.test import TestCase
from .models import UserModel
# Create your tests here.

class UserModelTestCase(TestCase):
    def setUp(self):
        self.name = "Some_User"
        self.varsity = "Some Varstiy"
        new_user = UserModel.objects.create(name=self.name,varsity=self.varsity)

    def test_profile_created(self):
        name = self.name
        varsity = self.varsity
        user_profile = UserModel.objects.filter(name=self.name,varsity=self.varsity)
        self.assertTrue(user_profile.exists())
        self.assertTrue(user_profile.count() == 1)

    def test_new_user(self):
        name = self.name
        varsity = self.varsity
        if(not(UserModel.objects.filter(name=name).exists())):
            new_user = UserModel.objects.create(name=self.name,varsity=self.varsity)

        else:
            print("Cant Created with the same name")
