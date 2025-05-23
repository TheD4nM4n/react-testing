import styles from './JustinComponent.module.css'

function JustinComponent() {
  return (
    <div className={styles.justincomponent}>
      <h1>Justin Component</h1>
      <p>This is a component.</p>
      <div className="card">
        <div className="card-header">
          I'm very hungry
        </div>
        <div className="card-body">
          pls donate monies :)
        </div>
                  <button type="button" className="btn btn-primary">
            <a>Donate</a>
          </button>
      </div>
    </div>
  );
}

export default JustinComponent;