from rest_framework import viewsets
from rest_framework import generics
from mainapp.serializers import UserSerializer, \
    OpportunityPostSerializer, NonProfitOrganizationSerializer,\
    VolunteerSerializer, ApplicationForOpportunitySerializer, OpportunityPostTypeSerializer,\
    SponserSerializer, OpportunityPostLocationSerializer
from django.contrib.auth.models import User
from .models import OpportunityPost, NonProfitOrganization, Volunteer, \
    ApplicationForOpportunity, Sponser


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


# class OpportunityPostViewSet(generics.ListAPIView):
#     queryset = OpportunityPost.objects.all()
#     serializer_class = OpportunityPostSerializer


class OpportunityPostTypeViewSet(viewsets.ModelViewSet):
    queryset = OpportunityPost.objects.values('type_of_work').distinct()
    serializer_class = OpportunityPostTypeSerializer


class OpportunityPostLocationViewSet(viewsets.ModelViewSet):
    queryset = OpportunityPost.objects.values('location').distinct()
    serializer_class = OpportunityPostLocationSerializer


class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


class ApplicationForOpportunityViewSet(viewsets.ModelViewSet):
    queryset = ApplicationForOpportunity.objects.all()
    serializer_class = ApplicationForOpportunitySerializer


class SponserViewSet(viewsets.ModelViewSet):
    queryset = Sponser.objects.all()
    serializer_class = SponserSerializer
