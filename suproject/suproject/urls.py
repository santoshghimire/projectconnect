from django.conf.urls import patterns, include, url
# from django.views.generic import TemplateView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from mainapp.views import UserViewSet, OpportunityPostViewSet, \
    NonProfitOrganizationViewSet, VolunteerViewSet, \
    ApplicationForOpportunityViewSet, OpportunityPostTypeViewSet,\
    SponserViewSet, OpportunityPostLocationViewSet, \
    OpportunityPostTimeFrameViewSet
admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
# router.register(r'opportunities', OpportunityPostViewSet.as_view())
router.register(r'opportunities', OpportunityPostViewSet)
router.register(r'project-types', OpportunityPostTypeViewSet)
router.register(r'organizations', NonProfitOrganizationViewSet)
router.register(r'timeframes', OpportunityPostTimeFrameViewSet)
router.register(r'volunteers', VolunteerViewSet)
router.register(r'application', ApplicationForOpportunityViewSet)
router.register(r'sponsers', SponserViewSet)
router.register(r'locations', OpportunityPostLocationViewSet)

urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^', include(router.urls)),
    # url(
    #     regex=r'^/$',
    #     view=TemplateView.as_view(template_name='landing.html'),
    #     name='landing'
    # ),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
