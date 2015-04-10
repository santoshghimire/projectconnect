from rest_framework import viewsets
from mainapp.serializers import UserSerializer, \
    OpportunityPostSerializer, NonProfitOrganizationSerializer,\
    VolunteerSerializer, ApplicationForOpportunitySerializer
from django.contrib.auth.models import User
from .models import OpportunityPost, NonProfitOrganization, Volunteer, \
    ApplicationForOpportunity


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class NonProfitOrganizationViewSet(viewsets.ModelViewSet):
    queryset = NonProfitOrganization.objects.all()
    serializer_class = NonProfitOrganizationSerializer


class OpportunityPostViewSet(viewsets.ModelViewSet):
    queryset = OpportunityPost.objects.all()
    serializer_class = OpportunityPostSerializer


class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


class ApplicationForOpportunityViewSet(viewsets.ModelViewSet):
    queryset = ApplicationForOpportunity.objects.all()
    serializer_class = ApplicationForOpportunitySerializer
