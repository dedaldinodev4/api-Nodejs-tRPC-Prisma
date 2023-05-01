-- CreateTable
CREATE TABLE "_heroes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "_heroes_pkey" PRIMARY KEY ("id")
);
