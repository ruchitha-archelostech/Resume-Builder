function TemplateSelector({
  template,
  setTemplate
}) {
  return (
    <div>

      <h2>Templates</h2>

      <select
        value={template}
        onChange={(e) =>
          setTemplate(e.target.value)
        }
      >
        <option value="template1">
          Corporate
        </option>

        <option value="template2">
          Sidebar
        </option>

        <option value="template3">
          Minimal
        </option>

      </select>

    </div>
  );
}

export default TemplateSelector;