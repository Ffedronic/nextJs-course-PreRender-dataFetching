function userProfile(props) {
  return <h1>{props.userName}</h1>;
}

export default userProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  return {
    props: {
      userName: "Félix",
    },
  };
}
