import { ThemeProvider } from "@/components/main/theme-provider";

const AllWrapper = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="personal">
      <div></div>
    </ThemeProvider>
  );
};

export default AllWrapper;
