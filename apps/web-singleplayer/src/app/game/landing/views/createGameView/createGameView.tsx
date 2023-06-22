import db from "@rfm/dexie-database";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import {
  Header,
  HeaderPrimaryLine,
  Input,
  Select,
  PanelWithTitle,
  Button,
  HeaderSecondaryLine,
} from "@rfm/ui-components";
import { generateStarterFirstTeamSquad } from "@rfm/utility-factories";
import { useNavigate } from "react-router-dom";
import { CountryModel } from "@rfm/utility-interfaces";

export default function CreateGameView() {
  const navigate = useNavigate();
  const [request, setRequest] = useState<any>({
    firstName: "",
    lastName: "",
    clubName: "",
    country: "",
    homeMain: "#000080",
    homeSecondary: "#FFFFFF",
    awayMain: "#000080",
    awaySecondary: "#FFFFFF",
  });
  const colors = useLiveQuery(() => db.colors.toArray(), []);
  const countries = useLiveQuery(
    () => db.countries.filter((x) => x.availableToPlay).toArray(),
    []
  );

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const clubId = await db.clubs.add({
      name: request.clubName,
      prestige: 3,
      colors: {
        homeColors: {
          main: request.homeMain,
          secondary: request.homeSecondary,
        },
        awayColors: {
          main: request.awayMain,
          secondary: request.awaySecondary,
        },
      },
    });
    const staffId = await db.staff.add({
      age: 22,
      firstName: request.firstName,
      lastName: request.lastName,
      nationality: request.country,
      technical: {
        coachingGoalkeepers: 10,
        coachingOutfield: 10,
        manManagement: 10,
        pyhsiotherapy: 10,
        tacticalKnowledge: 10,
        youngsters: 10,
      },
      nonTechnical: {
        adaptability: 10,
        determination: 10,
        discipline: 10,
        judgingAbility: 10,
        judgingPotential: 10,
        motivating: 10,
      },
    });
    const countryObj = await db.countries.get(request.country);
    const firstNames = await db.firstNames
      .filter((x) => x.language == countryObj?.languages[0])
      .toArray();
    const lastNames = await db.lastNames
      .filter((x) => x.language == countryObj?.languages[0])
      .toArray();
    const players = generateStarterFirstTeamSquad({
      firstNames: firstNames.map((x) => x.value),
      lastNames: lastNames.map((x) => x.value),
    });

    await db.players.bulkAdd(
      players.map((p) => ({
        ...p,
        nationality: request.country,
        club: clubId,
      }))
    );

    navigate(`/club/${clubId}`);
  };

  return (
    <>
      <Header
        backgroundColor={request.homeMain}
        textColor={request.homeSecondary}
      >
        <HeaderPrimaryLine title="* Welcome to Futbolico *" />
        <HeaderSecondaryLine subtitle="* Create Game *" />
      </Header>

      <div className="col-md-6 offset-md-3">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleFormSubmit}>
              <PanelWithTitle
                title="* Manager Info *"
                titleSize="small"
                style={{ marginTop: 8 }}
              >
                <Input
                  label="* First Name *"
                  name="firstName"
                  type="text"
                  value={request.firstName}
                  required
                  onChange={(e) => {
                    setRequest({ ...request, firstName: e.target.value });
                  }}
                />
                <Input
                  label="* Last Name *"
                  name="lastName"
                  type="text"
                  value={request.lastName}
                  required
                  onChange={(e) => {
                    setRequest({ ...request, lastName: e.target.value });
                  }}
                />
              </PanelWithTitle>

              <PanelWithTitle
                title="* Club Info *"
                titleSize="small"
                style={{ marginTop: 8 }}
              >
                <Input
                  label="* Club Name *"
                  name="clubName"
                  type="text"
                  value={request.clubName}
                  required
                  onChange={(e) => {
                    setRequest({ ...request, clubName: e.target.value });
                  }}
                />
                <Select
                  style={{ marginTop: 2 }}
                  label="* Country *"
                  value={request.country}
                  required
                  onChange={(e) => {
                    setRequest({
                      ...request,
                      country: e.target.value,
                    });
                  }}
                >
                  {countries?.map((c: CountryModel.Base, i: number) => (
                    <option key={i} value={c.alpha3Code}>
                      {c.name}
                    </option>
                  ))}
                </Select>
              </PanelWithTitle>

              <PanelWithTitle
                title="* Home Kit *"
                titleSize="small"
                style={{ marginTop: 8 }}
              >
                <Select
                  label="* Main *"
                  value={request.homeMain}
                  required
                  onChange={(e) => {
                    setRequest({
                      ...request,
                      homeMain: e.target.value,
                    });
                  }}
                >
                  {colors?.map((c, i) => (
                    <option
                      key={i}
                      value={c.value}
                      disabled={c.value == request.homeSecondary}
                    >
                      {c.name}
                    </option>
                  ))}
                </Select>
                <Select
                  label="* Secondary *"
                  value={request.homeSecondary}
                  required
                  onChange={(e) => {
                    setRequest({
                      ...request,
                      homeSecondary: e.target.value,
                    });
                  }}
                >
                  {colors?.map((c, i) => (
                    <option
                      key={i}
                      value={c.value}
                      disabled={c.value == request.homeMain}
                    >
                      {c.name}
                    </option>
                  ))}
                </Select>
              </PanelWithTitle>

              <PanelWithTitle
                title="* Away Kit *"
                titleSize="small"
                style={{ marginTop: 8 }}
              >
                <Select
                  label="* Main *"
                  value={request.awayMain}
                  required
                  onChange={(e) => {
                    setRequest({
                      ...request,
                      awayMain: e.target.value,
                    });
                  }}
                >
                  {colors?.map((c, i) => (
                    <option
                      key={i}
                      value={c.value}
                      disabled={c.value == request.awaySecondary}
                    >
                      {c.name}
                    </option>
                  ))}
                </Select>
                <Select
                  label="* Secondary *"
                  value={request.awaySecondary}
                  required
                  onChange={(e) => {
                    setRequest({
                      ...request,
                      awaySecondary: e.target.value,
                    });
                  }}
                >
                  {colors?.map((c, i) => (
                    <option
                      key={i}
                      value={c.value}
                      disabled={c.value == request.awayMain}
                    >
                      {c.name}
                    </option>
                  ))}
                </Select>
              </PanelWithTitle>

              <PanelWithTitle title="" style={{ marginTop: 8 }}>
                <Button
                  type="submit"
                  className="blue rounded"
                  style={{ marginTop: 0 }}
                >
                  * Submit *
                </Button>
              </PanelWithTitle>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
