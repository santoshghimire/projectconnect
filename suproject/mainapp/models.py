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
    year_established = models.IntegerField()
    email = models.EmailField()
    website = models.URLField()
    logo = models.ImageField(upload_to='organizations/logo', null=True)
    picture_1 = models.ImageField(upload_to='organizations/pictures', null=True)
    picture_2 = models.ImageField(upload_to='organizations/pictures', null=True)

    def __unicode__(self):
        return self.name


class OpportunityPost(models.Model):
    """
    A model that saves the opportunity posts of NonProfitOrganizations
    """
    title = models.CharField(max_length=200)
    description = models.TextField()
    no_of_hours = models.CharField(max_length=100)
    starting_date = models.DateField()
    time_frame = models.CharField(max_length=100)
    requirements = models.TextField()
    purpose = models.CharField(max_length=2000)
    type_of_work = models.CharField(max_length=200)
    NGO = models.ForeignKey(NonProfitOrganization)
    picture = models.ImageField(upload_to='opportunity/', null=True)
    location = models.CharField(max_length=200)
    CATEGORY_CHOICES = (
        ('Volunteer', 'Volunteer'),
        ('Internship', 'Internship')
    )
    category = models.CharField(
        max_length=10,
        choices=CATEGORY_CHOICES,
        default='Volunteer'
    )
    created_at = models.DateTimeField(auto_now_add=True, null=True)

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
    reference_person = models.ForeignKey('self', null=True)

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
    resume = models.FileField(upload_to='resume/')
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __unicode__(self):
        return self.interest_reason
