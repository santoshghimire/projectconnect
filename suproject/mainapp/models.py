from django.db import models


class NonProfitOrganization(models.Model):
    """
    A model that saves details about the NonProfitOrganizations
    """
    name = models.CharField(max_length=150)
    mission = models.CharField(max_length=1000)
    description = models.TextField()
    category = models.CharField(max_length=150)
    location = models.CharField(max_length=150)
    contact_number = models.CharField(max_length=15)
    year_established = models.DateField()
    email = models.EmailField()
    website = models.URLField()

    def __unicode__(self):
        return self.name


class OpportunityPost(models.Model):
    """
    A model that saves the opportunity posts of NonProfitOrganizations
    """
    title = models.CharField(max_length=200)
    description = models.TextField()
    no_of_hours = models.IntegerField()
    duration = models.CharField(max_length=100)
    requirements = models.TextField()
    purpose = models.CharField(max_length=2000)
    type_of_work = models.CharField(max_length=200)
    NGO = models.ForeignKey(NonProfitOrganization)
    created_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.title


class Volunteer(models.Model):
    """
    A model that saves the details about the Volunteer
    """
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female')
    )
    gender = models.CharField(
        max_length=10,
        choices=GENDER_CHOICES,
        default='male'
    )
    address = models.CharField(max_length=400)
    contact_number = models.CharField(max_length=15)
    date_of_birth = models.DateField()
    resume = models.FileField(upload_to='resume')
    reference_person = models.ForeignKey('self')

    def __unicode__(self):
        return self.title


class ApplicationForOpportunity(models.Model):
    """
    A model that saves the details of the application of Volunteer
    for opportunity
    """
    volunteer = models.ForeignKey(Volunteer)
    opportunity_post = models.ForeignKey(OpportunityPost)
    interest_reason = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.interest_reason
