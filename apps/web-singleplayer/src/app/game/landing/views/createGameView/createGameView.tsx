import {
  Header,
  HeaderPrimaryLine,
  Form,
  Input,
  Select,
  PanelWithTitle,
  Button,
} from "../../../../shared/components";
import styles from "./createGameView.module.scss";

export default function CreateGameView() {
  const countries: any[] = [];

  return (
    <>
      <Header backgroundColor="#ffffff" textColor="#111f41">
        <HeaderPrimaryLine title="* Welcome to Futbolico *" />
      </Header>

      <div className="col-md-6 offset-md-3">
        <div className="row">
          <div className="col-12">
            <form>
              <PanelWithTitle
                title="* Manager Info *"
                titleSize="small"
                style={{ marginTop: 8 }}
              >
                <Input
                  label="* First Name *"
                  name="firstName"
                  type="text"
                  //value={request.firstName}
                  required
                  // onChange={(e) => {
                  //   setRequest({ ...request, firstName: e.target.value });
                  // }}
                />
                <Input
                  label="* Last Name *"
                  name="lastName"
                  type="text"
                  //value={request.lastName}
                  required
                  // onChange={(e) => {
                  //   setRequest({ ...request, lastName: e.target.value });
                  // }}
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
                  //value={request.clubName}
                  required
                  // onChange={(e) => {
                  //   setRequest({ ...request, clubName: e.target.value });
                  // }}
                />
                <Select
                  label="* Country *"
                  //value={request.country}
                  required
                  // onChange={(e) => {
                  //   setRequest({
                  //     ...request,
                  //     country: e.target.value,
                  //   });
                  // }}
                >
                  {countries?.map((c: any, i: number) => (
                    <option key={i} value={c.id}>
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
                  //value={request.homeMain}
                  required
                  // onChange={(e) => {
                  //   setRequest({
                  //     ...request,
                  //     homeMain: e.target.value,
                  //   });
                  // }}
                >
                  {/* {colors.map((c, i) => (
                  <option
                    key={i}
                    value={c.value}
                    disabled={c.value == request.homeSecondary}
                  >
                    {c.name}
                  </option>
                ))} */}
                </Select>
                <Select
                  label="* Secondary *"
                  //value={request.homeSecondary}
                  required
                  // onChange={(e) => {
                  //   setRequest({
                  //     ...request,
                  //     homeSecondary: e.target.value,
                  //   });
                  // }}
                >
                  {/* {colors.map((c, i) => (
                  <option
                    key={i}
                    value={c.value}
                    disabled={c.value == request.homeMain}
                  >
                    {c.name}
                  </option>
                ))} */}
                </Select>
              </PanelWithTitle>

              <PanelWithTitle
                title="* Away Kit *"
                titleSize="small"
                style={{ marginTop: 8 }}
              >
                <Select
                  label="* Main *"
                  //value={request.awayMain}
                  required
                  // onChange={(e) => {
                  //   setRequest({
                  //     ...request,
                  //     awayMain: e.target.value,
                  //   });
                  // }}
                >
                  {/* {colors.map((c, i) => (
                  <option
                    key={i}
                    value={c.value}
                    disabled={c.value == request.awaySecondary}
                  >
                    {c.name}
                  </option>
                ))} */}
                </Select>
                <Select
                  label="* Secondary *"
                  //value={request.awaySecondary}
                  required
                  // onChange={(e) => {
                  //   setRequest({
                  //     ...request,
                  //     awaySecondary: e.target.value,
                  //   });
                  // }}
                >
                  {/* {colors.map((c, i) => (
                  <option
                    key={i}
                    value={c.value}
                    disabled={c.value == request.awayMain}
                  >
                    {c.name}
                  </option>
                ))} */}
                </Select>
              </PanelWithTitle>
            </form>
          </div>
          <Form legend="" style={{ marginTop: 8 }}>
            <Button
              type="submit"
              className="blue rounded"
              style={{ marginTop: 8 }}
            >
              * Submit *
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
