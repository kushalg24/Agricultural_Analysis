import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import { Button } from "../ui/button";
import Spinner from "../loaders/Spinner";
import { states } from "./state-data";
import { surveyNumbers } from "./survey-data"; // Import survey numbers data
import Modal from "../modal/Modal"; // Import the Modal component

export default function LocationForm({ setGeoJsonData, setSurveyGeoJsonData }) {
  const [districts, setDistricts] = useState([]);
  const [mandals, setMandals] = useState([]);
  const [villages, setVillages] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMandal, setSelectedMandal] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [surveyData, setSurveyData] = useState(null);

  const handleStateChange = (value) => {
    setSelectedState(value);
    const state = states.find((state) => state.name === value);
    if (state) {
      setDistricts(state.districts);
    } else {
      setDistricts([]);
    }
    setSelectedDistrict("");
    setMandals([]);
    setSelectedMandal("");
    setVillages([]);
    setSelectedVillage("");
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    const district = districts.find(
      (district) => district.district_name === value
    );
    if (district) {
      setMandals(district.mandals);
    } else {
      setMandals([]);
    }
    setSelectedMandal("");
    setVillages([]);
    setSelectedVillage("");
  };

  const handleMandalChange = (value) => {
    setSelectedMandal(value);
    const mandal = mandals.find((mandal) => mandal.mandal_name === value);
    if (mandal) {
      setVillages(mandal.villages);
    } else {
      setVillages([]);
    }
    setSelectedVillage("");
  };

  const handleVillageChange = (value) => {
    setSelectedVillage(value);
  };

  const handleSurveyChange = (value) => {
    setSelectedSurvey(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (!selectedDistrict || !selectedState || !selectedSurvey) {
      alert("Please select state, district, and survey number.");
      return;
    }

    setLoading(true);
    const survey = surveyNumbers[selectedSurvey];
    if (survey) {
      const surveyGeoJson = {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: survey.coordinates,
        },
        properties: {
          name: `Survey Number ${survey.surveyNumber}`,
        },
      };
      setSurveyGeoJsonData(surveyGeoJson);

      const surveyData = {
        ndviImage: `/ndviImages/ndvi-${survey.ndviImage}.jpg`,
        trueColorImage: `/trueColorImages/truecolor-${survey.trueColorImage}.png`,
        ...survey,
      };

      setSurveyData(surveyData);
      setModalIsOpen(true);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-[30%]"
    >
      <Card className="w-full max-w-md p-6 space-y-4">
        <CardHeader>
          <CardTitle>Location Selector</CardTitle>
          <CardDescription>
            Select your state and district to proceed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Select onValueChange={handleStateChange} value={selectedState}>
              <SelectTrigger id="state">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {states.map((state) => (
                    <SelectItem key={state.name} value={state.name}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="district">District</Label>
            <Select
              onValueChange={handleDistrictChange}
              value={selectedDistrict}
            >
              <SelectTrigger id="district">
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {districts.map((district) => (
                    <SelectItem
                      key={district.district_name}
                      value={district.district_name}
                    >
                      {district.district_name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mandal">Mandal</Label>
            <Select onValueChange={handleMandalChange} value={selectedMandal}>
              <SelectTrigger id="mandal">
                <SelectValue placeholder="Select mandal" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {mandals.map((mandal) => (
                    <SelectItem
                      key={mandal.mandal_name}
                      value={mandal.mandal_name}
                    >
                      {mandal.mandal_name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="village">Village</Label>
            <Select onValueChange={handleVillageChange} value={selectedVillage}>
              <SelectTrigger id="village">
                <SelectValue placeholder="Select village" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {villages.map((village) => (
                    <SelectItem
                      key={village.village_name}
                      value={village.village_name}
                    >
                      {village.village_name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="survey_number">Survey Number</Label>
            <Select onValueChange={handleSurveyChange} value={selectedSurvey}>
              <SelectTrigger id="survey_number">
                <SelectValue placeholder="Select survey number" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.keys(surveyNumbers).map((key) => (
                    <SelectItem key={key} value={key}>
                      {surveyNumbers[key].surveyNumber}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
        </CardFooter>
      </Card>
      {surveyData && (
        <Modal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          surveyData={surveyData}
        />
      )}
    </form>
  );
}
