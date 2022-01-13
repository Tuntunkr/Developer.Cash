import Footer from "./Footer"
import FormPreview from "./utilities/FormPreview"

const Form = () => {
  return (
    <>
      <div className="p-3">
        <section>
          <h2 className="text-emerald-600 mb-10">Details</h2>
          <p>
            Note that Developers.Cash is a catalog for Bitcoin Cash developer
            resources. It is not intended as an index of end-user Bitcoin Cash
            services/resources.
          </p>
          {/* form */}
          <form action="">
            <div>
              <select name="category" id="category">
                <option value="">Category</option>
              </select>
              <label htmlFor="category">Main category of resource</label>
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="title"
                id="title"
                placeholder="Title"
              />
              <label htmlFor="">The name of the Resource</label>
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="subheading"
                id="subheading"
                placeholder="C++ Full Node"
              />
              <label htmlFor="subheading">
                The subheading of the Resource (e.g 'Full Node')
              </label>
            </div>
            <div>
              <textarea
                name="description"
                id="description"
                cols=""
                type="textarea"
                rows=""
                placeholder="A more verbose description of the resource here"
              />
              <label htmlFor="description">
                A more verbose description of the resource here
              </label>
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="logoUrl"
                id="logoUrl"
                placeholder="logo Url"
              />
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="background_color"
                id="background_color"
                placeholder="#46473e"
              />
              <label htmlFor="background_color">
                Background color behind logo.
              </label>
            </div>
            <div>
              <select name="tags" id="tags">
                <option value="">Tags</option>
              </select>
              <label htmlFor="tags">List of tags that are applicable</label>
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="warning"
                id="warning"
                placdholder="Warning"
              />
              <label htmlFor="warning">
                If this resource is unstable or in alpha/beta, please indicate
                it here
              </label>

              <h3>Links</h3>
              <div>
                <div>
                  <input
                    className="input"
                    type="text"
                    name="offical_site"
                    id="official_site"
                    placeholder="official site"
                  />
                  <label htmlFor="official_site">The title of the Link</label>
                </div>
                <div>
                  <input
                    className="input"
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://your-site.com"
                  />
                  <label htmlFor="url">The Url of the link.</label>
                </div>
                <button>Remove</button>
              </div>

              <button>Add Link</button>
            </div>
          </form>
        </section>
        <section>
          <FormPreview
            category="C++ Full Node"
            title="Your Resource"
            content="A more verbose description of the resource here."
          />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Form
