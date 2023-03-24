import React, { useState, useEffect } from "react";
import { menuData } from "../../constants";

function Sidebar() {
  const [mainMenu, setMainMenu] = useState(menuData);

  return (
    <div className="sidebar">
      <div className="sidebar_warp">
        <div className="brand_logo">Logo</div>
        <nav className="navbar p-0">
          {/* <ul className="menu">
            {mainMenu.map((menu) => (
              <li key={menu.key}>
                {menu.label}
                {menu?.nodes && (
                  <ul className="sub_menu">
                    {menu?.nodes.map((sub_menu) => (
                      <li key={sub_menu.key}>
                        {sub_menu.label}
                        {sub_menu?.nodes && (
                          <ul className="sub_sub_menu">
                            {sub_menu?.nodes.map((sub_sub_menu) => (
                              <li key={sub_sub_menu.key}>
                                {sub_sub_menu.label}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul> */}

          <div className="menu accordion w-100">
            {mainMenu.map((menu) => (
              <div className="accordion-item rounded-0" key={menu.key}>
                <h2 className="accordion-header" id="menu">
                  <button
                    className="accordion-button collapsed rounded-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${menu.key}`}
                    aria-expanded="true"
                    aria-controls={menu.key}
                    htmlFor={`check_${menu.key}`}
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={`check_${menu.key}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`check_${menu.key}`}
                      >
                        {menu.label}
                      </label>
                    </div>
                  </button>
                </h2>
                <div
                  id={menu.key}
                  className="accordion-collapse collapse"
                  aria-labelledby="menu"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {menu?.nodes && (
                      <div className="sub_menu accordion w-100">
                        {menu?.nodes.map((sub_menu) => (
                          <div
                            className="accordion-item rounded-0"
                            key={sub_menu.key}
                          >
                            <h2 className="accordion-header" id="sub_menu">
                              <button
                                className="accordion-button collapsed rounded-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${sub_menu.key}`}
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={`check_${sub_menu.key}`}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`check_${sub_menu.key}`}
                                  >
                                    {sub_menu.label}
                                  </label>
                                </div>
                              </button>
                            </h2>
                            <div
                              id={sub_menu.key}
                              className="accordion-collapse collapse"
                              aria-labelledby="sub_menu"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                {sub_menu?.nodes && (
                                  <div className="sub_sub_menu accordion w-100">
                                    {sub_menu?.nodes.map((sub_sub_menu) => (
                                      <div
                                        className="accordion-item rounded-0"
                                        key={sub_sub_menu.key}
                                      >
                                        <h2
                                          className="accordion-header"
                                          id="sub_sub_menu"
                                        >
                                          <button
                                            className="accordion-button collapsed rounded-0"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${sub_sub_menu.key}`}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                          >
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id={`check_${sub_sub_menu.key}`}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor={`check_${sub_sub_menu.key}`}
                                              >
                                                {sub_sub_menu.label}
                                              </label>
                                            </div>
                                          </button>
                                        </h2>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong>
                </div>
              </div>
            </div>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
