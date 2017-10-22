package com.hack.debit.places;

import com.google.maps.GeoApiContext;
import com.google.maps.NearbySearchRequest;
import com.google.maps.PlacesApi;
import com.google.maps.model.LatLng;
import com.google.maps.model.PlaceType;
import com.google.maps.model.PlacesSearchResponse;
import com.google.maps.model.PlacesSearchResult;
import com.hack.debit.contoller.vo.PlaceVO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by arnaldo on 22/10/2017.
 */
@Component
public class PlacesApiService {

    public List<PlaceVO> getPlace(Double lat, Double lng) {
        List<PlaceVO> places = new ArrayList<>();
        LatLng latLng = new LatLng();
        latLng.lat = lat;
        latLng.lng = lng;

        GeoApiContext context = new GeoApiContext.Builder()
                .apiKey(GoogleApiKey.KEY)
                .build();

        NearbySearchRequest nearBy = PlacesApi.nearbySearchQuery(context, latLng);
        PlacesSearchResponse response = nearBy.location(latLng).radius(1500)
                .type(PlaceType.FOOD)
                .type(PlaceType.BAR)
                .type(PlaceType.BEAUTY_SALON)
                .type(PlaceType.BICYCLE_STORE)
                .type(PlaceType.CLOTHING_STORE)
                .type(PlaceType.DEPARTMENT_STORE)
                .type(PlaceType.ELECTRONICS_STORE)
                .type(PlaceType.HAIR_CARE)
                .type(PlaceType.LIQUOR_STORE)
                .type(PlaceType.NIGHT_CLUB)
                .type(PlaceType.RESTAURANT)
                .type(PlaceType.SHOPPING_MALL)
                .type(PlaceType.STORE)
                .type(PlaceType.SHOE_STORE)
                .awaitIgnoreError();
        for (PlacesSearchResult place : response.results) {
            if (place.rating > 0) {
                PlaceVO placeVO = new PlaceVO();
                placeVO.setName(place.name);
                placeVO.setPriceLevel((long) place.rating);
                placeVO.setLat(place.geometry.location.lat);
                placeVO.setLng(place.geometry.location.lng);
                places.add(placeVO);
            }
        }
        return places;
    }
}
