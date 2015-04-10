from django.contrib.auth.models import User
from rest_framework import serializers
from .models import OpportunityPost, NonProfitOrganization, Volunteer, ApplicationForOpportunity


# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


class NonProfitOrganizationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NonProfitOrganization
        fields = (
            'name', 'mission', 'description', 'category', 'location',
            'contact_number', 'year_established', 'email', 'website',
            'logo', 'picture_1', 'picture_2'
        )


class OpportunityPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OpportunityPost
        fields = (
            'title', 'description', 'no_of_hours', 'duration',
            'requirements', 'purpose', 'type_of_work', 'NGO',
            'picture', 'created_at'
        )


class VolunteerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Volunteer
        fields = (
            'first_name', 'last_name', 'gender', 'address',
            'contact_number', 'date_of_birth',
            'reference_person'
        )


class ApplicationForOpportunitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ApplicationForOpportunity
        fields = ('volunteer', 'opportunity_post', 'interest_reason', 'resume', 'created_at')
