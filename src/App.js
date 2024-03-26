import logo from "./logo.svg";
import "./App.css";
import "./normalize.css";
import "./webflow.css";
import "./deeplogics-awesome-site.webflow.css";

function App() {
  return (
    <div>
      <div
        id="w-node-cdd4ebb1-75ff-6665-5f13-c97968a6f228-a72ed97f"
        className="w-layout-layout stack wf-layout-layout"
      >
        <div
          id="w-node-_5aa6ba50-a826-cefe-5b41-65448f712cdd-a72ed97f"
          className="w-layout-cell"
        >
          <div className="cell_form">
            <div className="form-block w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                data-ms-form="login"
                className="form"
                data-wf-page-id="660149417122ee00a72ed97f"
                data-wf-element-id="57f8a931-fa62-631a-5891-8244a9417570"
              >
                <h2 className="h2">Log in to your account</h2>
                <div className="spacer-20" />
                <div className="form-field">
                  <input
                    className="field w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="Enter your email"
                    type="email"
                    id="Email"
                  />
                </div>
                <div className="form-field">
                  <input
                    className="field w-input"
                    maxLength={256}
                    name="Password"
                    data-name="Password"
                    placeholder="Password"
                    type="password"
                    id="Password"
                  />
                  <div className="spacer-20" />
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="button w-button"
                  defaultValue="Log In"
                />
                <a href="#" className="button social w-inline-block">
                  <img
                    src="images/google.svg"
                    loading="lazy"
                    width={20}
                    alt
                    className="google"
                  />
                  <p>Continue with Google</p>
                </a>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <div className="spacer-20" />
            <div className="flex-end">
              <a href="#" className="link_text">
                Create an account
              </a>
              <a data-ms-modal="forgot-password" href="#" className="link_text">
                Reset password
              </a>
            </div>
          </div>
        </div>
        <div
          id="w-node-_05c4008f-f218-7559-0310-5f04a38a476c-a72ed97f"
          className="w-layout-cell"
        >
          <div className="image-block">
            <div className="flex-end">
              <h2 className="h2 white mb-0">Find beauty</h2>
              <a href="#" className="button_white w-inline-block">
                <div>Explore nature</div>
                <div className="icon_white w-embed">
                  <svg
                    width={420}
                    height={420}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          id="w-node-a7ccd39c-1ebb-b7dd-3079-00663d99d8be-a72ed97f"
          className="w-layout-cell"
        >
          <div
            id="w-node-fc854ae3-643e-658e-6cfe-128a74f93472-a72ed97f"
            className="w-layout-layout stack_split wf-layout-layout"
          >
            <div
              id="w-node-fc854ae3-643e-658e-6cfe-128a74f93473-a72ed97f"
              className="w-layout-cell"
            >
              <div className="image-block_small" />
            </div>
            <div
              id="w-node-fc854ae3-643e-658e-6cfe-128a74f93474-a72ed97f"
              className="w-layout-cell"
            >
              <div className="block_features">
                <div>
                  <h2 className="h2">Robust Platform</h2>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
                <a href="#" className="button_black w-inline-block">
                  <div>Take a tour</div>
                  <div className="icon_white w-embed">
                    <svg
                      width={420}
                      height={420}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
