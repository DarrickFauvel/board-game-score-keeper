type ParamsProps = {
  params: {
    id: string;
  };
};

const GamePage = ({ params }: ParamsProps) => {
  const { id } = params;

  return <div>GamePage for {params.id}</div>;
};
export default GamePage;
