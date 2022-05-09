<?php
function placesRecommend($condition = '', $question = ''){
    $weather = array("bogota" => "cold", "Monteria" => "hot","medellin" => "mild");
    $ubication = array("Guajira" => "north", "Leticia" => "south",
    "santader" => "east" "Antioquia" => "west");
    $tourist = array("Santa Marta" => "sea", "villavicencio" => "plains",
    "Riohacha" => "desert", "Quindio" => "valley");

    switch($condition){
        case "weather":
            $search = $weather;
         return array_search($question,"weather");
         break; 
         case "ubicacion":
            $search = "ubication"
            echo array_search($question, "ubication");
            break;
            case "tourism":
                $search = "tourism"
                echo array_search($question,"tourism");
            break;
            default:
            echo "welcome to colombia!";
    }
    echo "The perfect place for you is ".array_search($question, $search);
}
placesRecommend("weather", "cold");