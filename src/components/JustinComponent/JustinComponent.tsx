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
        <div className={styles.hbutton}>
          <a href='https://cash.app/$PotatoMP3' target='blank' className={styles.hbutton}>
            <button type="button" className="btn btn-primary" style={{width: '100%'}}>
              <a>Donate</a>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JustinComponent;